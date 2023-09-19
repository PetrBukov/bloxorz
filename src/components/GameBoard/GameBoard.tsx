import React, { useCallback, useEffect } from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useSwipe, SwipeDirection } from '../../hooks'
import { calcElementPosition, calcElementSize, getSize } from '../../utils'
import { TileText } from '../../types'

import { Hero } from '../Hero'
import { GameBoardTile } from '../GameBoardTile'

import {
  GameBoardContainer,
  GameBoardGestureZone,
  GameBoardWrapper,
  TileTextContainer,
} from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardPosition, calculateBoardSizesPx } from './GameBoard.utils'
import { GESTURE_ZONE_ID, KEY_PRESS_TO_DIRECTION_MAP } from './GameBoard.constants'

const renderTileTexts = (tileTexts?: Array<TileText>) => {
  return (
    tileTexts &&
    tileTexts.map(({ text, placement }) => {
      const elementPosition = calcElementPosition(placement)
      const size = getSize(placement)
      const elementSize = calcElementSize(size)

      return (
        <TileTextContainer key={text} {...elementPosition} {...elementSize}>
          {text}
        </TileTextContainer>
      )
    })
  )
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
    levelSequenceNumber,
  } = currentGame

  const swipeHandler = useCallback(
    (direction: SwipeDirection) =>
      dispatch({ type: GameCenterActionType.moveHeroBlock, direction }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useSwipe({ gestureZoneId: GESTURE_ZONE_ID, onSwipe: swipeHandler })

  const boardSizesPx = calculateBoardSizesPx(size)

  useEffect(() => {
    const handleUserKeyPress = ({ key }: globalThis.KeyboardEvent) => {
      const direction = KEY_PRESS_TO_DIRECTION_MAP[key]

      if (direction) {
        dispatch({ type: GameCenterActionType.moveHeroBlock, direction })
      }
    }

    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const boardPositions = calculateBoardPosition(hero)

  return (
    <GameBoardGestureZone id={GESTURE_ZONE_ID}>
      <GameBoardWrapper {...boardSizesPx}>
        <GameBoardContainer
          {...boardPositions}
          totalColumns={size.width}
          totalRows={size.height}
          gameStatus={status}
        >
          {tiles.map((tile, tileIndex) => {
            // Tiles can not be moved from one position to another so it is safe to use index as a key here
            return (
              <GameBoardTile
                key={tileIndex}
                tile={tile}
                moves={moves}
                levelSequenceNumber={levelSequenceNumber}
                hero={hero}
                activeActionType={activeAction?.type}
              />
            )
          })}
          {renderTileTexts(tileTexts)}
          <Hero {...hero} activeActionType={activeAction?.type} />
        </GameBoardContainer>
      </GameBoardWrapper>
    </GameBoardGestureZone>
  )
}
