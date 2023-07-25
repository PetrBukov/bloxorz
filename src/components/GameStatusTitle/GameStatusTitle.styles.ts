import { keyframes } from '@emotion/react'
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

const victoryScores = keyframes`
    0% {
        bottom: -10px;
        opacity: 0;
    }
    100% {
        bottom: 10px;
        opacity: 1;
    }
`

const failureStatusItem1 = keyframes`
    0% {
        opacity: 0;
        left: 0%;
    }
    100% {
        opacity: 1;
        left: 50%;
    }
`

const failureStatusItem2 = keyframes`
    0% {
        opacity: 0;
        right: 0%;
    }
    100% {
        opacity: 1;
        right: 50%;
    }
`

export const StatusText = styled.div`
  position: absolute;
  text-align: center;
  background: none;
  font-family: simpleStamp, sans-serif;
  font-size: 32px;
  padding: 5px;

  &:nth-of-type(1) {
    top: -20px;
    left: 50%;
    transform: translateX(-50%) rotate(-2deg);
    opacity: 1;
    margin-left: 30px;

    animation: ${failureStatusItem1} 2s;
  }
  &:nth-of-type(2) {
    bottom: -20px;
    right: 50%;
    transform: translateX(50%) rotate(-2deg);
    opacity: 1;
    margin-right: 30px;

    animation: ${failureStatusItem2} 2s;
  }
`

export const FailureStatusText = styled(StatusText)`
  background-color: var(--red);
  color: var(--white);
`

export const PausedStatusText = styled(StatusText)`
  background-color: var(--yellow);
  color: var(--black);
`

export const StatusContainer = styled.div<{ gameStatus: GameStatus }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(2deg);

  height: ${({ gameStatus }) => (gameStatus === GameStatus.victory ? '120px' : '80px')};
  width: 100%;
  background: rgba(0, 0, 0, 80%);

  animation: ${statusBlackLine} 1s linear;
`

export const StatusInner = styled.div`
  position: relative;
  height: 100%;
`

export const RatingContainer = styled.div`
  position: absolute;

  top: -30px;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg) scale(1.4);
`

export const VictoryScores = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  display: grid;
  justify-items: center;
  gap: 8px;

  animation: ${victoryScores} 1s linear;
`

export const VictoryScoresItem = styled.div<{ valueColor: string }>`
  color: var(--gray400);
  font-size: 16px;

  &:first-of-type {
    color: var(--gray200);
    font-size: 22px;
    font-weight: 600;

    span {
      color: ${({ valueColor }) => valueColor};
    }
  }
`
