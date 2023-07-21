import React from 'react'
import { TileType } from '../../types/game'
import { EmptyTitle, GameBoardContainer, SurfaceTitle, TargetTitle } from './GameBoard.styles'
import { GameBoardProps } from './GameBoard.types'

export const GameBoard: React.FC<GameBoardProps> = ({ tiles }) => {
  return (
    <GameBoardContainer>
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
    </GameBoardContainer>
  )
}
