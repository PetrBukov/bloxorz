import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { GameScore } from '../../types/game'

const appearStar1 = keyframes`
    0% {
        transform: scale(0);
        }
    100% {
        transform: scale(1);
    }
`

const appearStar2 = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

const appearStar3 = keyframes`
    0% {
        transform: scale(0);
    }
    64% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`

export const RatingContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: baseline;
  grid-auto-flow: column;
  grid-gap: 24px;
`

export const RatingStar = styled.div<{ gameScore: GameScore }>`
  position: relative;

  color: transparent;
  font-size: 42px;
  &:nth-of-type(2) {
    font-size: 60px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    content: '⭐️';
    display: block;

    text-shadow:
      0 0 rgba(255, 255, 255, 40%),
      0 0 rgba(0, 0, 0, 20%);
  }

  &::after {
    content: '⭐️';
    display: block;

    position: absolute;
    top: 0;
    left: 0;

    color: var(--yellow);
    transform: scale(1);
    text-shadow: 0 0 10px var(--yellow);
  }

  &:nth-of-type(1)::after {
    display: ${({ gameScore }) => (gameScore >= 1 ? 'block' : 'none')};
    animation: ${appearStar1} 0.5s linear;
  }

  &:nth-of-type(2)::after {
    display: ${({ gameScore }) => (gameScore >= 2 ? 'block' : 'none')};
    animation: ${appearStar2} 1s linear;
  }

  &:nth-of-type(3)::after {
    display: ${({ gameScore }) => (gameScore === 3 ? 'block' : 'none')};
    animation: ${appearStar3} 1.5s linear;
  }
`
