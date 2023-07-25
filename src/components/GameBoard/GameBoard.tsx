import React, { useCallback, useEffect } from 'react'

import { TileType } from '../../types/game'
import { EmptyTitle, GameBoardContainer, SurfaceTitle, TargetTitle } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizesPx } from './GameBoard.utils'
import { Hero } from '../Hero'
import { KEYBOARD } from '../../constants/keyboard'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const GameBoard: React.FC<GameBoardProps> = ({ currentGame }) => {
  const { dispatch } = useGameCenter()
  const {
    board: { size, tiles },
    hero,
    status,
  } = currentGame

  const boardSizesPx = calculateBoardSizesPx(size)

  const handleUserKeyPress = useCallback((event: globalThis.KeyboardEvent) => {
    const { key } = event
    switch (key) {
      case KEYBOARD.ArrowUp: {
        dispatch({ type: GameCenterActionType.moveUp })
        break
      }
      case KEYBOARD.ArrowDown: {
        dispatch({ type: GameCenterActionType.moveDown })
        break
      }
      case KEYBOARD.ArrowLeft: {
        dispatch({ type: GameCenterActionType.moveLeft })
        break
      }
      case KEYBOARD.ArrowRight: {
        dispatch({ type: GameCenterActionType.moveRight })
        break
      }
      default: {
        break
      }
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
      <Hero {...hero} gameStatus={status} />
    </GameBoardContainer>
  )
}
