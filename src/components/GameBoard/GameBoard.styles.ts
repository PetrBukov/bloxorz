import styled from '@emotion/styled'

import whitegrit from '../../assets/images/whitegrit.png'
import { BoardSizes } from './GameBoard.types'
import { HERO_WIDTH } from '../../constants/board'
import { GameStatus } from '../../types/game'
import { css, keyframes } from '@emotion/react'

export const SurfaceTitle = styled.div`
  background-color: var(--white);
`

export const EmptyTitle = styled.div``

const victoryStatus = keyframes`
    0% {
      background-color: var(--spaceViolet);
    }
    100% {
      background-color: var(--acidGreen);
    }
`

const victoryStatusStyles = css`
  background-color: var(--acidGreen);
  animation: ${victoryStatus} 4s steps(2);
`

export const TargetTitle = styled.div<{ gameStatus: GameStatus }>`
  background-color: var(--acidGreen);
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  &::before {
    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    background-color: var(--spaceViolet);
    border-radius: 50%;

    background: var(--spaceViolet) url(${whitegrit});
    background-size: 500px;

    ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusStyles}
  }
`
export const GameBoardContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'width' && prop !== 'height',
})<
  BoardSizes & {
    totalColumns: number
    totalRows: number
  }
>`
  position: relative;

  display: grid;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  grid-template-columns: repeat(${({ totalColumns }) => totalColumns}, 1fr);
  grid-template-rows: repeat(${({ totalRows }) => totalRows}, 1fr);
  grid-gap: 2px;
`

export const GameBoardGestureZone = styled.div`
  display: grid;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-items: center;
`
