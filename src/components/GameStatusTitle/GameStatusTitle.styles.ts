import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { GameStatus } from '../../types/game'

// const statusBlackLine = keyframes`
//     0% {
//         background: rgba(0, 0, 0, 0%);
//     }
//     100% {
//         background: rgba(0, 0, 0, 80%);
//     }
// `

const statusTextTop = keyframes`
    0% {
        left: 0%;
        opacity: 0;
    }
    100% {
        left: 50%;
        opacity: 1;
    }
`

const statusTextBottom = keyframes`
    0% {
        opacity: 0;
        right: 0%;
    }
    100% {
        opacity: 1;
        right: 50%;
    }
`

export const failureStatusTextStyles = css`
  background-color: var(--red);
  color: var(--white);
`

export const pausedStatusTextStyles = css`
  background-color: var(--yellow);
  color: var(--black);
`

export const victoryStatusTextStyles = css`
  background-color: var(--acidGreen);
  color: var(--black);
`

export const StatusText = styled.div<{ gameStatus: GameStatus }>`
  position: absolute;
  text-align: center;
  background: none;
  font-family: simpleStamp, sans-serif;
  font-size: 32px;
  padding: 5px;
  opacity: 1;

  ${({ gameStatus }) => gameStatus === GameStatus.failure && failureStatusTextStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.paused && pausedStatusTextStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusTextStyles}

  &:nth-of-type(1) {
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    margin-left: 30px;

    animation: ${statusTextTop} 2s linear;
  }
  &:nth-of-type(2) {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%) rotate(-2deg);
    margin-right: 30px;

    animation: ${statusTextBottom} 2s linear;
  }
`

export const StatusContainer = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: -5%;
  transform: translateY(-50%) rotate(2deg);

  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  height: 80px;
  width: 110%;
  background: rgba(0, 0, 0, 80%);
`

export const StatusInner = styled.div`
  position: relative;
  height: 100%;
`
