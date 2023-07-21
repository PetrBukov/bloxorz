import { HERO_WIDTH } from '../../constants/board'
import { Dimensions } from '../../types/common'
import { HeroBlockSizes } from './Hero.types'

export const calculateHeroBlockSizes = (dimensions: Dimensions): HeroBlockSizes => {
  const { width, height } = dimensions

  return {
    width: `${width * HERO_WIDTH}px`,
    height: `${height * HERO_WIDTH}px`,
  }
}
