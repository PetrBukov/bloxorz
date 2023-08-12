import React from 'react'

import { HeroBlock } from './Hero.styles'
import { calculateHeroBlockSizes } from './Hero.utils'
import { HeroProps } from './Hero.types'

export const Hero: React.FC<HeroProps> = ({ size, activeActionType }) => {
  const heroBlockSizes = calculateHeroBlockSizes(size)

  return <HeroBlock {...heroBlockSizes} activeActionType={activeActionType} />
}
