import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants/board'
import { ElementPosition, Coordinates } from '../types/common'

export const calcElementPosition = (position: Coordinates): ElementPosition => {
  const top = `${position.y * TILE_WIDTH + position.y * GAP_BETWEEN_TILES}px`
  const left = `${position.x * TILE_WIDTH + position.x * GAP_BETWEEN_TILES}px`

  return {
    top,
    left,
  }
}
