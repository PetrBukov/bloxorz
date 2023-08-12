import { GAP_BETWEEN_TILES, HERO_WIDTH, TILE_WIDTH } from '../../constants'
import { ElementSize, Dimensions } from '../../types'

export const calculateHeroBlockSizes = (dimensions: Dimensions): ElementSize => {
  const { width, height } = dimensions
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
