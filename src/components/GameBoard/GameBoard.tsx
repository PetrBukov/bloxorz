import React, { useCallback, useEffect } from 'react'

import {
  EmptyTile,
  GameBoardContainer,
  GameBoardGestureZone,
  LevelTile,
  StageTile,
  SurfaceTile,
  TargetTile,
  TileTextContainer,
} from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizesPx } from './GameBoard.utils'
import { Hero } from '../Hero'
import { useGameCenter } from '../../providers/GameCenter'
import { GESTURE_ZONE_ID, KEY_PRESS_TO_DIRECTION_MAP } from './GameBoard.constants'
import { useSwipe } from '../../hooks/useSwipe'
import { SwipeDirection } from '../../hooks'
import { GameBoardActionType, Tile, TileGameAction, TileType } from '../../types/tile'
import { calculateBlockPosition } from '../../utils/calculateBlockPosition'
import { calculateBlockSizes } from '../../utils/calculateBlockSizes'
import { GameStatus, LevelID, TileText } from '../../types/game'
import { getLevelById } from '../../utils/getLevelById'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

const renderTileTexts = (tileTexts?: Array<TileText>) => {
  return (
    tileTexts &&
    tileTexts.map(({ text, position, size }, index) => {
      const blockPositions = calculateBlockPosition(position)
      const blockSizes = calculateBlockSizes(size)

      return (
        <TileTextContainer key={text} {...blockPositions} {...blockSizes}>
          {text}
        </TileTextContainer>
      )
    })
  )
}

const renderTileGameAction = (
  tile: TileGameAction,
  gameStatus: GameStatus,
  moves: number,
  levelId: LevelID,
  key: number,
) => {
  const { action } = tile

  switch (action.type) {
    case GameBoardActionType.levelCompleted: {
      return (
        <TargetTile key={key} gameStatus={gameStatus}>
          <div>{Boolean(moves) && moves < 99 && moves}</div>
        </TargetTile>
      )
    }
    case GameBoardActionType.moveToAnotherLevel: {
      const level = getLevelById(action.levelId)
      const levelName = level?.name || '?'

      return (
        <LevelTile key={key} tileStatus={tile.status}>
          <div>{levelName}</div>
        </LevelTile>
      )
    }
    case GameBoardActionType.moveToAnotherStage: {
      const currentStage = getLevelById(levelId)
      const isNextStage = currentStage?.nextLevelId === action.stageId

      return (
        <StageTile
          key={key}
          tileStatus={tile.status}
          direction={isNextStage ? 'right' : 'left'}
        ></StageTile>
      )
    }
    default: {
      return <EmptyTile key={key} />
    }
  }
}

const renderTiles = (
  tiles: Array<Tile>,
  gameStatus: GameStatus,
  moves: number,
  levelId: LevelID,
) => {
  return tiles.map((tile, index) => {
    switch (tile.type) {
      case TileType.surface: {
        const { options } = tile

        return <SurfaceTile key={index} {...options} />
      }
      case TileType.gameAction: {
        return renderTileGameAction(tile, gameStatus, moves, levelId, index)
      }
      default: {
        return <EmptyTile key={index} />
      }
    }
  })
}

export const GameBoard: React.FC<GameBoardProps> = ({ currentGame }) => {
  const { dispatch } = useGameCenter()
  const {
    board: { size, tiles },
    hero,
    status,
    moves,
    tileTexts,
    activeAction,
    levelId,
  } = currentGame

  const swipeHandler = useCallback(
    (direction: SwipeDirection) =>
      dispatch({ type: GameCenterActionType.moveHeroBlock, direction }),
    [dispatch],
  )

  useSwipe({ gestureZoneId: GESTURE_ZONE_ID, onSwipe: swipeHandler })

  const boardSizesPx = calculateBoardSizesPx(size)

  const handleUserKeyPress = useCallback((event: globalThis.KeyboardEvent) => {
    const { key } = event

    const direction = KEY_PRESS_TO_DIRECTION_MAP[key]
    if (direction) {
      dispatch({ type: GameCenterActionType.moveHeroBlock, direction })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return (
    <GameBoardGestureZone id={GESTURE_ZONE_ID}>
      <GameBoardContainer
        {...boardSizesPx}
        totalColumns={size.width}
        totalRows={size.height}
        gameStatus={status}
      >
        {renderTiles(tiles, status, moves, levelId)}
        <Hero {...hero} activeActionType={activeAction?.type} />
        {renderTileTexts(tileTexts)}
      </GameBoardContainer>
    </GameBoardGestureZone>
  )
}
