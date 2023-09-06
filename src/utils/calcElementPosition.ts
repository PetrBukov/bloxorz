import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../constants'
import { ElementPosition } from '../types'
import { Placement } from '../types/common'
import { getAngles } from './getAngles'

export const calcElementPosition = (placement: Placement): ElementPosition => {
  const [angleA] = getAngles(placement)
  const top = `${angleA.y * TILE_WIDTH + angleA.y * GAP_BETWEEN_TILES}px`
  const left = `${angleA.x * TILE_WIDTH + angleA.x * GAP_BETWEEN_TILES}px`

  return {
    top,
    left,
  }
}
