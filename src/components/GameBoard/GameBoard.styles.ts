import styled from '@emotion/styled'

import whitegrit from '../../assets/images/whitegrit.png'
import { BoardSizes } from './GameBoard.types'
import { GAP_BETWEEN_TILES, HERO_WIDTH, TILE_WIDTH } from '../../constants/board'
import { GameStatus } from '../../types/game'
import { css, keyframes } from '@emotion/react'
import { BlockPosition, BlockSizes, DIRECTION, Direction } from '../../types/common'
import { TileStatus, TileSurfaceOptions } from '../../types/tile'

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

    border-radius: 50%;

    background: var(--spaceViolet) url(${whitegrit});
    background-size: 500px;

    ${({ gameStatus }) => gameStatus === GameStatus.victory && victoryStatusStyles}
  }
`

const availableStatusStyles = css`
  background-color: var(--gray200);

  div {
    color: var(--violet);
  }

  &::before {
    background: var(--gray200);
    border: 2px solid var(--violet);
  }
`

const blockedStatusStyles = css`
  background-color: var(--gray200);

  div {
    color: var(--gray300);
  }

  &::before {
    background: var(--gray200);
    border: 2px solid var(--gray300);
  }
`

const activatedStatusStyles = css`
  background-color: var(--acidGreen);

  div {
    color: var(--violet);
  }

  &::before {
    background: var(--black);
    opacity: 9%;
    width: ${TILE_WIDTH}px;
    height: ${TILE_WIDTH}px;
    border-radius: 0px;
  }

  &::after {
    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    background: var(--acidGreen);
  }
`

export const LevelTile = styled.div<{ tileStatus?: TileStatus }>`
  position: relative;
  background-color: var(--gray300);
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  div {
    z-index: 2;
    color: var(--gray300);
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

    border-radius: 50%;

    background: var(--violet);
    background-size: 500px;
  }

  ${({ tileStatus }) => tileStatus === TileStatus.available && availableStatusStyles}
  ${({ tileStatus }) => tileStatus === TileStatus.blocked && blockedStatusStyles}
  ${({ tileStatus }) => tileStatus === TileStatus.activated && activatedStatusStyles}
`

const hiddenStatusStyles = css`
  visibility: hidden;
`

const previousStageStyles = css`
  left: 60%;
  transform: translate(-50%, -50%) rotate(-135deg) scale(0.45);
`

export const StageTile = styled.div<{ tileStatus?: TileStatus; direction: Direction }>`
  position: relative;
  background-color: var(--white);
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  div {
    z-index: 2;
    color: var(--gray300);
    font-family: simpleStamp, sans-serif;
    font-size: 32px;
    padding-top: 4px;
  }

  &::before {
    position: absolute;
    left: 40%;
    top: 50%;

    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    border-top: ${HERO_WIDTH / 2}px solid var(--violet);
    border-right: ${HERO_WIDTH / 2}px solid var(--violet);
    border-bottom: ${HERO_WIDTH / 2}px solid transparent;
    border-left: ${HERO_WIDTH / 2}px solid transparent;

    transform: translate(-50%, -50%) rotate(45deg) scale(0.45);

    ${({ direction }) => direction === DIRECTION.left && previousStageStyles}
  }

  &::after {
    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid var(--violet);
  }

  ${({ tileStatus }) => tileStatus === TileStatus.hidden && hiddenStatusStyles}
`

export const GameBoardContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'width' && prop !== 'height',
})<
  BoardSizes & {
    totalColumns: number
    totalRows: number
    gameStatus: GameStatus
  }
>`
  position: relative;

  opacity: ${({ gameStatus }) => (gameStatus === GameStatus.paused ? '50%' : '100%')};

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
