import React from 'react'

import { HeroBlock } from './Hero.styles'
import { calculateHeroBlockPosition, calculateHeroBlockSizes } from './Hero.utils'
import { HeroProps } from './Hero.types'

export const Hero: React.FC<HeroProps> = ({ size, position, activeActionType }) => {
  const heroBlockSizes = calculateHeroBlockSizes(size)
  const heroBlockPosition = calculateHeroBlockPosition(position)

  return (
    <HeroBlock {...heroBlockSizes} {...heroBlockPosition} activeActionType={activeActionType} />
  )
}
