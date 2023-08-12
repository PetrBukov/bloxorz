import React, { useCallback, useEffect } from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useSwipe, SwipeDirection } from '../../hooks'
import { calcElementPosition, calcElementSize } from '../../utils'
import { TileText } from '../../types'

import { Hero } from '../Hero'
import { GameBoardTile } from '../GameBoardTile'

import { GameBoardContainer, GameBoardGestureZone, TileTextContainer } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardPosition, calculateBoardSizesPx } from './GameBoard.utils'
import { GESTURE_ZONE_ID, KEY_PRESS_TO_DIRECTION_MAP } from './GameBoard.constants'
import { useThrottle } from '../../hooks/useThrottle'

const renderTileTexts = (tileTexts?: Array<TileText>) => {
  return (
    tileTexts &&
    tileTexts.map(({ text, position, size }, index) => {
      const elementPosition = calcElementPosition(position)
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
    levelId,
  } = currentGame

  const swipeHandler = useCallback(
    (direction: SwipeDirection) =>
      dispatch({ type: GameCenterActionType.moveHeroBlock, direction }),
    [dispatch],
  )
  const throttledSwipeHandler = useThrottle(swipeHandler, 400)

  useSwipe({ gestureZoneId: GESTURE_ZONE_ID, onSwipe: throttledSwipeHandler })

  const boardSizesPx = calculateBoardSizesPx(size)

  const handleUserKeyPress = useCallback((event: globalThis.KeyboardEvent) => {
    const { key } = event

    const direction = KEY_PRESS_TO_DIRECTION_MAP[key]
    if (direction) {
      dispatch({ type: GameCenterActionType.moveHeroBlock, direction })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const throttledHandleUserKeyPress = useThrottle(handleUserKeyPress, 400)

  useEffect(() => {
    window.addEventListener('keydown', throttledHandleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', throttledHandleUserKeyPress)
    }
  }, [throttledHandleUserKeyPress])

  const boardPositions = calculateBoardPosition(hero)

  return (
    <GameBoardGestureZone id={GESTURE_ZONE_ID}>
      <GameBoardContainer
        {...boardSizesPx}
        {...boardPositions}
        totalColumns={size.width}
        totalRows={size.height}
        gameStatus={status}
      >
        {tiles.map((tile, index) => {
          // Tiles can not be moved from one position to another so it is safe to use index as a key here
          return (
            <GameBoardTile key={index} tile={tile} moves={moves} levelId={levelId} hero={hero} />
          )
        })}

        {renderTileTexts(tileTexts)}
      </GameBoardContainer>
      <Hero {...hero} activeActionType={activeAction?.type} />
    </GameBoardGestureZone>
  )
}
