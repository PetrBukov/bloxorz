import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { Dimensions } from '../types/common'
import { GameBoard } from '../types/gameBoard'
import { GameLevel } from '../types/gameLevel'
import { TileType } from '../types/tile'
import { calculateTileStatus } from './calculateTileStatus'
import { getRectangleTileIndexes } from './getRectangleTileIndexes'

const getTotalTilesAmount = (gameLevelSize: Dimensions) =>
  gameLevelSize.height * gameLevelSize.width

export const generateGameBoard = (
  gameLevel: GameLevel,
  completedLevels: CompletedLevels,
): GameBoard => {
  const { size: gameLevelSize, surfaces } = gameLevel

  // 1 - Create game board
  const gameBoard: GameBoard = {
    size: gameLevelSize,
    tiles: [],
  }

  // 2 - Fill game board with empty tiles
  const totalTilesAmount = getTotalTilesAmount(gameLevelSize)
  for (let i = 0; i < totalTilesAmount; i++) {
    gameBoard.tiles.push({
      type: TileType.empty,
    })
  }

  // 3 - Replace some empty tiles with surface tiles
  for (let surface of surfaces) {
    const surfaceTileIndexes = getRectangleTileIndexes({
      rectanglePosition: surface.position,
      rectangleSize: surface.size,
      gameLevelSize,
    })

    surfaceTileIndexes.forEach(surfaceIndex => {
      const { tile } = surface

      const status = calculateTileStatus(tile, completedLevels)

      gameBoard.tiles[surfaceIndex] = { ...tile, status }
    })
  }

  return gameBoard
}
