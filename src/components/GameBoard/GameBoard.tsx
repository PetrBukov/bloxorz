import React, { useCallback, useEffect } from 'react'

import {
  EmptyTile,
  GameBoardContainer,
  GameBoardGestureZone,
  SurfaceTile,
  SurfaceWideRightTile,
  TargetTile,
  TileTextContainer,
} from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizesPx } from './GameBoard.utils'
import { Hero } from '../Hero'
import { useGameCenter } from '../../providers/GameCenter'
import {
  GESTURE_ZONE_ID,
  DIRECTION_TO_ACTION_MAP,
  KEY_PRESS_TO_ACTION_MAP,
} from './GameBoard.constants'
import { useSwipe } from '../../hooks/useSwipe'
import { SwipeDirection } from '../../hooks'
import { Tile, TileType } from '../../types/tile'
import { calculateBlockPosition } from '../../utils/calculateBlockPosition'
import { calculateBlockSizes } from '../../utils/calculateBlockSizes'
import { GameStatus, TileText } from '../../types/game'

const renderTileTexts = (tileTexts?: Array<TileText>) => {
  return (
    tileTexts &&
    tileTexts.map(({ text, position, size }, index) => {
      const blockPositions = calculateBlockPosition(position)
      const blockSizes = calculateBlockSizes(size)

      return (
        <TileTextContainer key={text} className="" {...blockPositions} {...blockSizes}>
          {text}
        </TileTextContainer>
      )
    })
  )
}

const renderTiles = (tiles: Array<Tile>, gameStatus: GameStatus, moves: number) => {
  return tiles.map((tile, index) => {
    switch (tile.type) {
      case TileType.surface: {
        return <SurfaceTile key={index} />
      }
      case TileType.surfaceWideRight: {
        return <SurfaceWideRightTile key={index} />
      }
      case TileType.target: {
        return (
          <TargetTile key={index} gameStatus={gameStatus}>
            <div>{Boolean(moves) && moves < 99 && moves}</div>
          </TargetTile>
        )
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
  } = currentGame

  const swipeHandler = useCallback(
    (direction: SwipeDirection) => {
      const moveActionType = DIRECTION_TO_ACTION_MAP[direction]

      dispatch({ type: moveActionType })
    },
    [dispatch],
  )

  useSwipe({ gestureZoneId: GESTURE_ZONE_ID, onSwipe: swipeHandler })

  const boardSizesPx = calculateBoardSizesPx(size)

  const handleUserKeyPress = useCallback((event: globalThis.KeyboardEvent) => {
    const { key } = event

    const moveActionType = KEY_PRESS_TO_ACTION_MAP[key]
    if (moveActionType) {
      dispatch({ type: moveActionType })
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
      <GameBoardContainer {...boardSizesPx} totalColumns={size.width} totalRows={size.height}>
        {renderTiles(tiles, status, moves)}
        {renderTileTexts(tileTexts)}
        <Hero {...hero} gameStatus={status} gameMoves={moves} />
      </GameBoardContainer>
    </GameBoardGestureZone>
  )
}
