import React, { useCallback, useEffect } from 'react'

import { GameBoardContainer, GameBoardGestureZone, TileTextContainer } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizesPx } from './GameBoard.utils'
import { Hero } from '../Hero'
import { useGameCenter } from '../../providers/GameCenter'
import { GESTURE_ZONE_ID, KEY_PRESS_TO_DIRECTION_MAP } from './GameBoard.constants'
import { useSwipe } from '../../hooks/useSwipe'
import { SwipeDirection } from '../../hooks'
import { calcElementPosition, calcElementSize } from '../../utils'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameBoardTile } from '../GameBoardTile'
import { TileText } from '../../types/tileText'

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
        {tiles.map((tile, index) => {
          // Tiles can not be moved from one position to another so it is safe to use index as a key here
          return <GameBoardTile key={index} tile={tile} moves={moves} levelId={levelId} />
        })}

        <Hero {...hero} activeActionType={activeAction?.type} />

        {renderTileTexts(tileTexts)}
      </GameBoardContainer>
    </GameBoardGestureZone>
  )
}
