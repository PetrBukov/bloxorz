import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants'
import { ElementPosition, Coordinates } from '../types'

export const calcElementPosition = (position: Coordinates): ElementPosition => {
  const top = `${position.y * TILE_WIDTH + position.y * GAP_BETWEEN_TILES}px`
  const left = `${position.x * TILE_WIDTH + position.x * GAP_BETWEEN_TILES}px`

  return {
    top,
    left,
  }
}
