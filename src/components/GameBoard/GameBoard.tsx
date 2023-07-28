import React, { useCallback, useEffect } from 'react'

import { TileType } from '../../types/game'
import {
  EmptyTitle,
  GameBoardContainer,
  GameBoardGestureZone,
  SurfaceTitle,
  TargetTitle,
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

export const GameBoard: React.FC<GameBoardProps> = ({ currentGame }) => {
  const { dispatch } = useGameCenter()
  const {
    board: { size, tiles },
    hero,
    status,
    moves,
  } = currentGame

  const swipeHandler = useCallback(
    (direction: SwipeDirection) => {
      console.log({ direction })
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
        {tiles.map((tile, index) => {
          switch (tile.type) {
            case TileType.surface: {
              return <SurfaceTitle key={index} />
            }
            case TileType.target: {
              return <TargetTitle key={index} gameStatus={status} />
            }
            default: {
              return <EmptyTitle key={index} />
            }
          }
        })}
        <Hero {...hero} gameStatus={status} gameMoves={moves} />
      </GameBoardContainer>
    </GameBoardGestureZone>
  )
}
