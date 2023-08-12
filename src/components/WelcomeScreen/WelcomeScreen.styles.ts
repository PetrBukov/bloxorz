import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { appearanceAnimation } from '../../App.styles'

const spinAnimation = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`

const blinkAnimation = keyframes`
    78% {
      color: inherit;
      text-shadow: inherit;
    }
    79%{
       color: #333;
    }
    80% {
      text-shadow: none;
    }
    81% {
      color: inherit;
      text-shadow: inherit;
    }
    82% {
      color: #333;
      text-shadow: none;
    }
    83% {
      color: inherit;
      text-shadow: inherit;
    }
    92% {
      color: #333;
      text-shadow: none;
    }
    92.5% {
      color: inherit;
      text-shadow: inherit;
    }
`

export const WelcomeScreenContainer = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 16px;
`

export const WelcomeScreenLogo = styled.h1`
  margin: 0;
  margin-bottom: 24px;

  font-family: simpleStamp, sans-serif;
  font-size: 56px;
  color: var(--acidGreen);
  letter-spacing: 3.5px;

  --neon-shadow-color: #8ca400;
  text-shadow:
    0 -40px 100px,
    0 0 2px,
    0 0 1em var(--neon-shadow-color),
    0 0 0.5em var(--neon-shadow-color),
    0 0 0.1em var(--neon-shadow-color),
    0 10px 3px #000;

  animation: ${appearanceAnimation} linear 2s;

  > div span {
    animation: ${blinkAnimation} linear infinite 4s;
  }
`

export const WelcomeScreenSubtitle = styled.div`
  color: var(--white);
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  animation: ${appearanceAnimation} linear 2s;
`

export const GameLoadingContainer = styled.div`
  position: relative;

  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 16px;

  color: var(--white);
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  animation: ${appearanceAnimation} linear 2s;

  svg {
    position: absolute;
    left: -30px;

    color: var(--acidGreen);

    transform: rotate(0deg);
    animation: ${spinAnimation} linear infinite 1s;
  }
`
