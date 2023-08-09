import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../../../../constants'

const swipeAnimation = keyframes`
  0% {
    opacity: 10%;
    left: -30px;
  }
  100% {
    opacity: 90%;
    left: 30px;
  }
`

const keyPressAnimation = keyframes`
  0% {
    opacity: 70%;
    top: 0px;
    box-shadow: 0px 2px var(--gray400);
  }
  100% {
    opacity: 100%;
    top: 2px;
    box-shadow: 0px 0px var(--gray400);
  }
`

export const TutorialContainer = styled.div`
  position: relative;
  width: ${TILE_WIDTH * 5 + GAP_BETWEEN_TILES * 4}px;
  height: 500px;

  > div {
    position: absolute;
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    width: 100%;

    span {
      color: var(--acidGreen);
    }
  }

  > div:nth-of-type(2) {
    font-family: simpleStamp, sans-serif;
    font-size: 56px;
    color: var(--acidGreen);
  }

  > div:first-of-type {
    top: 70px;
  }

  > div:nth-of-type(2) {
    top: 130px;
  }

  > div:nth-of-type(3) {
    top: 330px;
  }

  > div:nth-of-type(4) {
    top: 430px;
  }
`

export const ControllersTipsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px 1fr;

  grid-row: 5;

  justify-items: center;
  align-items: center;
`

export const SwipeIconContainer = styled.div`
  position: relative;

  display: grid;
  align-items: center;

  animation: ${swipeAnimation} 3.5s Ease-out infinite;
`

export const KeyboardArrowsContainer = styled.div`
  display: grid;
  width: ${(TILE_WIDTH / 3) * 3 + 8}px;
  height: ${(TILE_WIDTH / 3) * 2 + 4}px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;

  > div {
    display: grid;
    align-items: center;
    justify-items: center;

    background-color: var(--white);
    box-shadow: 0px 2px var(--gray400);
    border-radius: 2px;
    opacity: 70%;

    svg {
      color: var(--gray500);
      font-size: 20px;
    }
  }

  > div:first-of-type {
    grid-column: 2;
  }

  > div:nth-of-type(2) {
    grid-column: 1;
  }

  > div:last-of-type {
    position: relative;
    animation: ${keyPressAnimation} 2s steps(2) infinite;
  }
`
