import { GameBoard, GameLevel, TileType } from '../types'
import { GameBoardRow } from '../types/gameBoard'
import { calcTileStatus } from './calcTileStatus'
import { getTileCoordinates } from './getTileCoordinates'

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
  for (let rowIndex = 0; rowIndex < gameLevelSize.height; rowIndex++) {
    let row: GameBoardRow = []

    for (let columnIndex = 0; columnIndex < gameLevelSize.width; columnIndex++) {
      row.push({
        type: TileType.empty,
        position: {
          x: columnIndex,
          y: rowIndex,
        },
      })
    }

    gameBoard.tiles.push(row)
  }

  // 3 - Replace some empty tiles with surface tiles
  for (let surface of surfaces) {
    const { placement: surfacePlacement, tile } = surface

    const tileCoordinates = getTileCoordinates(surfacePlacement)

    tileCoordinates.forEach(({ x: columnIndex, y: rowIndex }) => {
      const tileWIthPosition = gameBoard.tiles[rowIndex][columnIndex]

      const status = calcTileStatus(tile, lastCompletedLevel)

      gameBoard.tiles[rowIndex][columnIndex] = { ...tileWIthPosition, ...tile, status }
    })
  }

  return gameBoard
}
