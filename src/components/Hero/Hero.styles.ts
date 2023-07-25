import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

import { HeroBlockPosition, HeroBlockSizes } from './Hero.types'
import { HERO_WIDTH, TILE_WIDTH } from '../../constants/board'
import { GameStatus } from '../../types/game'

const failureStatus = keyframes`
    0% {
        filter: grayscale(0);
    }
    100% {
        filter: grayscale(1);
    }
`

const victoryStatus = keyframes`
    0% {
        background-color: var(--green);
    }
    100% {
        background-color: var(--violet);
    }
`

const failureStatusStyles = css`
  background-color: var(--red);
  opacity: 1;
  filter: grayscale(0);

  animation: ${failureStatus} 0.5s steps(2) infinite;
`

const victoryStatusStyles = css`
  background-color: var(--acidGreen);
  opacity: 1;
  transition-duration: 2s;
  border-radius: 50%;
`

export const HeroBlock = styled.div<
  HeroBlockSizes & HeroBlockPosition & { gameStatus: GameStatus }
>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: var(--violet);
  border-radius: ${HERO_WIDTH / 2}px;

  transition-duration: 0.5s;

  ${({ gameStatus }) => gameStatus === GameStatus.failure && failureStatusStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusStyles}
`
