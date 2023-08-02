import styled from '@emotion/styled'

import whitegrit from '../../assets/images/whitegrit.png'
import { BoardSizes } from './GameBoard.types'
import { GAP_BETWEEN_TILES, HERO_WIDTH } from '../../constants/board'
import { GameStatus } from '../../types/game'
import { css, keyframes } from '@emotion/react'
import { BlockPosition, BlockSizes } from '../../types/common'
import { TileSurfaceOptions } from '../../types/tile'

export const surfaceWideRightStyles = css`
  &::after {
    position: absolute;
    content: '';
    display: block;
    height: 100%;
    width: ${GAP_BETWEEN_TILES}px;
    right: -${GAP_BETWEEN_TILES}px;
    background-color: var(--white);
  }
`

export const SurfaceTile = styled.div<TileSurfaceOptions>`
  position: relative;
  background-color: var(--white);

  ${({ wideRight }) => wideRight && surfaceWideRightStyles}
`

export const EmptyTile = styled.div``

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

export const TargetTile = styled.div<{ gameStatus: GameStatus }>`
  position: relative;
  background-color: var(--acidGreen);
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  div {
    z-index: 2;
    color: var(--acidGreen);
    font-family: simpleStamp, sans-serif;
    font-size: 32px;
    padding-top: 4px;
  }

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

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
  z-index: 5;
  display: grid;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-items: center;
`

export const TileTextContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'width' && prop !== 'height',
})<BlockSizes & BlockPosition>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: grid;
  align-items: center;
  justify-content: center;

  font-family: simpleStamp, sans-serif;
  font-size: 24px;
  padding-top: 4px;
  color: var(--violet);
`
