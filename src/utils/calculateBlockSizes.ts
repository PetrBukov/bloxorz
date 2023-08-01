import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants/board'
import { BlockSizes, Dimensions } from '../types/common'

export const calculateBlockSizes = (dimensions: Dimensions): BlockSizes => {
  const { width, height } = dimensions

  return {
    width: `${width * TILE_WIDTH + (width - 1) * GAP_BETWEEN_TILES}px`,
    height: `${height * TILE_WIDTH + (height - 1) * GAP_BETWEEN_TILES}px`,
  }
}
