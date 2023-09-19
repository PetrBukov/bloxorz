import { GameBoard, GameLevel, TileType, TileWIthPosition } from '../types'
import { calcTileIndex } from './calcTileIndex'
import { calcTileStatus } from './calcTileStatus'
import { getTileCoordinates } from './getTileCoordinates'

export const createGameBoardForLevel = (
  gameLevel: GameLevel,
  lastCompletedLevel: number,
): GameBoard => {
  const { size: gameBoardSize, surfaces } = gameLevel

  // 1 - Create game board
  const gameBoard: GameBoard = {
    size: gameBoardSize,
    tiles: [],
  }

  // 2 - Fill game board with empty tiles
  for (let rowIndex = 0; rowIndex < gameBoardSize.height; rowIndex++) {
    let row: Array<TileWIthPosition> = []

    for (let columnIndex = 0; columnIndex < gameBoardSize.width; columnIndex++) {
      row.push({
        type: TileType.empty,
        position: {
          x: columnIndex,
          y: rowIndex,
        },
      })
    }

    gameBoard.tiles.push(...row)
  }

  // 3 - Replace some empty tiles with surface tiles
  for (let surface of surfaces) {
    const { placement: surfacePlacement, tile } = surface

    const tileCoordinatesList = getTileCoordinates(surfacePlacement)

    tileCoordinatesList.forEach(coordinates => {
      const tileIndex = calcTileIndex({ coordinates, gameBoardSize })

      const tileWIthPosition = gameBoard.tiles[tileIndex]
      const status = calcTileStatus(tile, lastCompletedLevel)

      gameBoard.tiles[tileIndex] = { ...tileWIthPosition, ...tile, status }
    })
  }

  return gameBoard
}
