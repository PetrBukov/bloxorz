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

  text-shadow: 0 0 56px #8ca400;

  animation: ${appearanceAnimation} linear 2s;
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

  animation: ${appearanceAnimation} linear 1.5s;

  svg {
    position: absolute;
    left: -30px;

    color: var(--acidGreen);

    transform: rotate(0deg);
    animation: ${spinAnimation} linear infinite 1s;
  }
`
