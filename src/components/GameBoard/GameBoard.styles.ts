import styled from '@emotion/styled'

import { GameStatus, ElementPosition, ElementSize } from '../../types'
import { GAP_BETWEEN_TILES } from '../../constants'

const DO_NOT_FORWARD_PROPS: Record<string, string> = {
  width: 'width',
  height: 'height',
  top: 'top',
  left: 'left',
  totalColumns: 'totalColumns',
  totalRows: 'totalRows',
  gameStatus: 'gameStatus',
}

export const GameBoardWrapper = styled('div', {
  shouldForwardProp: prop => !DO_NOT_FORWARD_PROPS[prop],
})<ElementSize>`
  position: absolute;

  top: 50%;
  left: 50%;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const GameBoardContainer = styled('div', {
  shouldForwardProp: prop => !DO_NOT_FORWARD_PROPS[prop],
})<
  ElementPosition & {
    totalColumns: number
    totalRows: number
    gameStatus: GameStatus
  }
>`
  position: absolute;

  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(${({ totalColumns }) => totalColumns}, 1fr);
  grid-template-rows: repeat(${({ totalRows }) => totalRows}, 1fr);
  grid-gap: ${GAP_BETWEEN_TILES}px;

  opacity: ${({ gameStatus }) => (gameStatus === GameStatus.paused ? '50%' : '100%')};
  transition-duration: 0.5s;
`

export const GameBoardGestureZone = styled.div`
  z-index: 5;

  position: relative;

  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
`

export const TileTextContainer = styled('div', {
  shouldForwardProp: prop => !DO_NOT_FORWARD_PROPS[prop],
})<ElementSize & ElementPosition>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-top: 4px;

  display: grid;
  align-items: center;
  justify-content: center;

  font-family: simpleStamp, sans-serif;
  font-size: 24px;
  color: var(--violet);
`
