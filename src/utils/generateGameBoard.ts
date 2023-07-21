import { Coordinates, Dimensions } from '../types/common'
import { GameBoard, TileType, GameLevel, Surface } from '../types/game'

const getTotalTilesAmount = (gameLevelSize: Dimensions) =>
  gameLevelSize.height * gameLevelSize.width

const getTileIndex = (position: Coordinates, gameLevelSize: Dimensions) => {
  const rowNumber = position.y
  const columnNumber = position.x
  const tilesPerRowAmount = gameLevelSize.width

  return rowNumber * tilesPerRowAmount + columnNumber
}

const getSurfaceTileIndexes = (surface: Surface, gameLevelSize: Dimensions): Array<number> => {
  const surfaceTileIndexes: Array<number> = []

  const tilesPerRowAmount = gameLevelSize.width
  const { position: surfacePosition, size: surfaceSize } = surface

  const firstRowIndex = surfacePosition.y
  const lastRowIndex = surfacePosition.y + surfaceSize.height - 1

  for (let currentRowIndex = firstRowIndex; currentRowIndex <= lastRowIndex; currentRowIndex++) {
    const prevRowTilesAmount = currentRowIndex * tilesPerRowAmount

    const firstColumnIndex = surfacePosition.x + prevRowTilesAmount
    const lastColumnIndex = surfacePosition.x + surfaceSize.width - 1 + prevRowTilesAmount

    for (
      let currentColumnIndex = firstColumnIndex;
      currentColumnIndex <= lastColumnIndex;
      currentColumnIndex++
    ) {
      surfaceTileIndexes.push(currentColumnIndex)
    }
  }

  return surfaceTileIndexes
}

export const generateGameBoard = (gameLevel: GameLevel): GameBoard => {
  const { size: gameLevelSize, surfaces, target } = gameLevel

  // 1 - Create game board
  const gameBoard: GameBoard = {
    size: gameLevelSize,
    target,
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
    const surfaceTileIndexes = getSurfaceTileIndexes(surface, gameLevelSize)

    surfaceTileIndexes.forEach(surfaceIndex => {
      gameBoard.tiles[surfaceIndex].type = TileType.surface
    })
  }

  // 4 - Set target type for the target tile
  const targetTileIndex = getTileIndex(target, gameLevelSize)
  gameBoard.tiles[targetTileIndex].type = TileType.target

  return gameBoard
}
