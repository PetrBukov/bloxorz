import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { Dimensions, GameBoard, GameLevel, TileType } from '../types'
import { calcTileStatus } from './calcTileStatus'
import { getSurfaceTileIndexes } from './getSurfaceTileIndexes'

const getTotalTilesAmount = (gameLevelSize: Dimensions) =>
  gameLevelSize.height * gameLevelSize.width

export const createGameBoardForLevel = (
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
    const surfaceTileIndexes = getSurfaceTileIndexes({
      surfacePosition: surface.position,
      surfaceSize: surface.size,
      gameLevelSize,
    })

    surfaceTileIndexes.forEach(surfaceIndex => {
      const { tile } = surface

      const status = calcTileStatus(tile, completedLevels)

      gameBoard.tiles[surfaceIndex] = { ...tile, status }
    })
  }

  return gameBoard
}
