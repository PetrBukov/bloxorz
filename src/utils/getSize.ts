import { Dimensions } from '../types'
import { Placement } from '../types/common'

export const getSize = (placement: Placement): Dimensions => {
  return {
    width: Math.abs(placement[0].x - placement[1].x) + 1,
    height: Math.abs(placement[0].y - placement[1].y) + 1,
  }
}
