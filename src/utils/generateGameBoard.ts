import { Coordinates, Dimensions } from '../types/common'
import { GameBoard, GameLevel } from '../types/game'
import { TileType } from '../types/tile'
import { getRectangleTileIndexes } from './getRectangleTileIndexes'

const getTotalTilesAmount = (gameLevelSize: Dimensions) =>
  gameLevelSize.height * gameLevelSize.width

const getTileIndex = (position: Coordinates, gameLevelSize: Dimensions) => {
  const rowNumber = position.y
  const columnNumber = position.x
  const tilesPerRowAmount = gameLevelSize.width

  return rowNumber * tilesPerRowAmount + columnNumber
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
    const surfaceTileIndexes = getRectangleTileIndexes({
      rectanglePosition: surface.position,
      rectangleSize: surface.size,
      gameLevelSize,
    })

    surfaceTileIndexes.forEach(surfaceIndex => {
      gameBoard.tiles[surfaceIndex].type = surface.type
    })
  }

  // 4 - Set target type for the target tile
  const targetTileIndex = getTileIndex(target, gameLevelSize)
  gameBoard.tiles[targetTileIndex].type = TileType.target

  return gameBoard
}
