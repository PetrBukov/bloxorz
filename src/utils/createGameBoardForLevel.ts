import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { Dimensions, GameBoard, GameLevel, TileType, Coordinates } from '../types'
import { calcTileStatus } from './calcTileStatus'
import { getSurfaceTileIndexes } from './getSurfaceTileIndexes'

const calcTilePosition = (tileIndex: number, gameLevelSize: Dimensions): Coordinates => {
  let y = 0
  let x = tileIndex

  while (x > gameLevelSize.width - 1) {
    y += 1
    x -= gameLevelSize.width
  }

  return {
    x,
    y,
  }
}

const getTotalTilesAmount = (gameLevelSize: Dimensions) =>
  gameLevelSize.height * gameLevelSize.width

export const createGameBoardForLevel = (
  gameLevel: GameLevel,
  lastCompletedLevel: number,
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
      position: calcTilePosition(i, gameLevelSize),
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
      const tileWIthPosition = gameBoard.tiles[surfaceIndex]
      const { tile } = surface

      const status = calcTileStatus(tile, lastCompletedLevel)

      gameBoard.tiles[surfaceIndex] = { ...tileWIthPosition, ...tile, status }
    })
  }

  return gameBoard
}
