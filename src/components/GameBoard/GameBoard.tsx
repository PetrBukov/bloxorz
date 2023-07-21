import React from 'react'
import { generateGameBoard } from '../../utils/generateGameBoard'
import { TEST_GAME_LEVEL } from './GameBoard.constants'
import { TileType } from '../../types/game'
import { EmptyTitle, GameBoardContainer, SurfaceTitle, TargetTitle } from './GameBoard.styles'

export const GameBoard: React.FC = () => {
  const { tiles } = generateGameBoard(TEST_GAME_LEVEL)
  console.log(tiles)
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
