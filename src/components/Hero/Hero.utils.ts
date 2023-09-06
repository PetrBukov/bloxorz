import { GAP_BETWEEN_TILES, HERO_WIDTH, TILE_WIDTH } from '../../constants'
import { ElementSize, ElementPosition } from '../../types'
import { Placement } from '../../types/common'
import { getAngles, getSize } from '../../utils'

export const calculateHeroBlockSizes = (placement: Placement): ElementSize => {
  const { width, height } = getSize(placement)
  const diffBetweenHeroBlockAndGap = TILE_WIDTH - HERO_WIDTH

  return {
    width: `${
      width * HERO_WIDTH +
      (width - 1) * GAP_BETWEEN_TILES +
      (width - 1) * diffBetweenHeroBlockAndGap
    }px`,
    height: `${
      height * HERO_WIDTH +
      (height - 1) * GAP_BETWEEN_TILES +
      (height - 1) * diffBetweenHeroBlockAndGap
    }px`,
  }
}

export const calculateHeroBlockPosition = (placement: Placement): ElementPosition => {
  const [angleA] = getAngles(placement)
  const diffBetweenHeroBlockAndGap = (TILE_WIDTH - HERO_WIDTH) / 2
  const topPoint = angleA.y * TILE_WIDTH + angleA.y * GAP_BETWEEN_TILES + diffBetweenHeroBlockAndGap
  const leftPoint =
    angleA.x * TILE_WIDTH + angleA.x * GAP_BETWEEN_TILES + diffBetweenHeroBlockAndGap

  return {
    top: `${topPoint}px`,
    left: `${leftPoint}px`,
  }
}
