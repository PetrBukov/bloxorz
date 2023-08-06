import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants/board'
import { ElementSize, Dimensions } from '../types/common'

export const calcElementSize = (dimensions: Dimensions): ElementSize => {
  const { width, height } = dimensions

  return {
    width: `${width * TILE_WIDTH + (width - 1) * GAP_BETWEEN_TILES}px`,
    height: `${height * TILE_WIDTH + (height - 1) * GAP_BETWEEN_TILES}px`,
  }
}
