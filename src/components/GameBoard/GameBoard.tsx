import React, { useCallback, useEffect } from 'react'

import { TileType } from '../../types/game'
import { EmptyTitle, GameBoardContainer, SurfaceTitle, TargetTitle } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizes } from './GameBoard.utils'
import { Hero } from '../Hero'
import { KEYBOARD } from '../../constants/keyboard'
import { useGameCenter } from '../../providers/GameCenter'

export const GameBoard: React.FC<GameBoardProps> = ({ board: { tiles, size }, hero }) => {
  const { dispatch } = useGameCenter()
  const boardSizes = calculateBoardSizes(size)

  const handleUserKeyPress = useCallback((event: globalThis.KeyboardEvent) => {
    const { key } = event
    switch (key) {
      case KEYBOARD.ArrowUp: {
        dispatch({ type: 'moveUp' })
        break
      }
      case KEYBOARD.ArrowDown: {
        dispatch({ type: 'moveDown' })
        break
      }
      case KEYBOARD.ArrowLeft: {
        dispatch({ type: 'moveLeft' })
        break
      }
      case KEYBOARD.ArrowRight: {
        dispatch({ type: 'moveRight' })
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
    <GameBoardContainer {...boardSizes} totalColumns={size.width} totalRows={size.height}>
      {tiles.map((tile, index) => {
        switch (tile.type) {
          case TileType.surface: {
            return <SurfaceTitle key={index} />
          }
          case TileType.target: {
            return <TargetTitle key={index} />
          }
          default: {
            return <EmptyTitle key={index} />
          }
        }
      })}
      <Hero {...hero} />
    </GameBoardContainer>
  )
}
