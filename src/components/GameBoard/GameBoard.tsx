import React from 'react'

import { TileType } from '../../types/game'
import { EmptyTitle, GameBoardContainer, SurfaceTitle, TargetTitle } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'
import { calculateBoardSizes } from './GameBoard.utils'
import { Hero } from '../Hero'

export const GameBoard: React.FC<GameBoardProps> = ({ board: { tiles, size }, hero }) => {
  const boardSizes = calculateBoardSizes(size)

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
