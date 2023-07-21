import styled from '@emotion/styled'

import { HeroBlockSizes } from './Hero.types'
import { HERO_WIDTH } from '../../constants/board'

export const HeroBlock = styled.div<HeroBlockSizes>`
  position: absolute;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: var(--red);
  border-radius: ${HERO_WIDTH / 2}px;
`
