import React from 'react'

import { HeroBlock } from './Hero.styles'
import { calculateHeroBlockPosition, calculateHeroBlockSizes } from './Hero.utils'
import { HeroProps } from './Hero.types'

export const Hero: React.FC<HeroProps> = ({ placement, activeActionType }) => {
  const heroBlockSizes = calculateHeroBlockSizes(placement)
  const heroBlockPosition = calculateHeroBlockPosition(placement)

  return (
    <HeroBlock {...heroBlockSizes} {...heroBlockPosition} activeActionType={activeActionType} />
  )
}
