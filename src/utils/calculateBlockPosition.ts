import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants/board'
import { BlockPosition, Coordinates } from '../types/common'

export const calculateBlockPosition = (position: Coordinates): BlockPosition => {
  const top = `${position.x * TILE_WIDTH + position.x * GAP_BETWEEN_TILES}px`
  const left = `${position.y * TILE_WIDTH + position.y * GAP_BETWEEN_TILES}px`

  return {
    top,
    left,
  }
}
