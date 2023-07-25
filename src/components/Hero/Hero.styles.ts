import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

import { HeroBlockPosition, HeroBlockSizes } from './Hero.types'
import { HERO_WIDTH } from '../../constants/board'
import { GameStatus } from '../../types/game'

const failureStatus = keyframes`
    0% {
        filter: grayscale(0);
    }
    100% {
        filter: grayscale(1);
    }
`

const failureStatusStyles = css`
  background-color: var(--red);
  filter: grayscale(0);

  animation: ${failureStatus} 0.5s steps(2) infinite;
`

const victoryStatusStyles = css`
  background-color: var(--acidGreen);
  opacity: 1;
`

export const HeroBlock = styled.div<
  HeroBlockSizes & HeroBlockPosition & { gameStatus: GameStatus }
>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: var(--acidGreen);
  border-radius: ${HERO_WIDTH / 2}px;
  border: 2px solid var(--violet);
  opacity: 0.8;

  transition-duration: 0.5s;

  ${({ gameStatus }) => gameStatus === GameStatus.failure && failureStatusStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusStyles}
`
