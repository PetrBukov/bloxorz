import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../../constants/board'
import { Dimensions } from '../../types/common'
import { BoardSizes } from './GameBoard.types'

export const calculateBoardSizesPx = (dimensions: Dimensions): BoardSizes => {
  const { width, height } = dimensions

  return {
    width: `${width * TILE_WIDTH + (width - 1) * GAP_BETWEEN_TILES}px`,
    height: `${height * TILE_WIDTH + (height - 1) * GAP_BETWEEN_TILES}px`,
  }
}
