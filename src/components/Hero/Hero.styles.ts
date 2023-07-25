import styled from '@emotion/styled'

import { HeroBlockPosition, HeroBlockSizes } from './Hero.types'
import { HERO_WIDTH } from '../../constants/board'

export const HeroBlock = styled.div<HeroBlockSizes & HeroBlockPosition>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: var(--red);
  border-radius: ${HERO_WIDTH / 2}px;

  transition-duration: 0.5s;
`
