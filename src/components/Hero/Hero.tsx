import React from 'react'

import { HeroBlock } from './Hero.styles'
import { calculateHeroBlockSizes } from './Hero.utils'
import { HeroProps } from './Hero.types'

export const Hero: React.FC<HeroProps> = ({ size }) => {
  const heroBlockSizes = calculateHeroBlockSizes(size)

  console.log({ heroBlockSizes })

  return <HeroBlock {...heroBlockSizes} />
}
