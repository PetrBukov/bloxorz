import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { GameStatus } from '../../types/game'

const statusBlackLine = keyframes`
    0% {
        background: rgba(0, 0, 0, 0%);
    }
    100% {
        background: rgba(0, 0, 0, 80%);
    }
`

const statusTextTop = keyframes`
    0% {
        opacity: 0;
        left: 0%;
    }
    100% {
        opacity: 1;
        left: 50%;
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

  ${({ gameStatus }) => gameStatus === GameStatus.failure && failureStatusTextStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.paused && pausedStatusTextStyles}
  ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusTextStyles}

  &:nth-of-type(1) {
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    opacity: 1;
    margin-left: 30px;

    animation: ${statusTextTop} 2s;
  }
  &:nth-of-type(2) {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%) rotate(-2deg);
    opacity: 1;
    margin-right: 30px;

    animation: ${statusTextBottom} 2s;
  }
`

export const StatusContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -5%;
  transform: translateY(-50%) rotate(2deg);

  height: 80px;
  width: 110%;
  background: rgba(0, 0, 0, 80%);

  animation: ${statusBlackLine} 1s linear;
`

export const StatusInner = styled.div`
  position: relative;
  height: 100%;
`
