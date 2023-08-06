import styled from '@emotion/styled'

import { BoardSizes } from './GameBoard.types'
import { GameStatus } from '../../types/game'
import { BlockPosition, BlockSizes } from '../../types/common'

const DO_NOT_FORWARD_PROPS: Record<string, string> = {
  width: 'width',
  height: 'height',
  totalColumns: 'totalColumns',
  totalRows: 'totalRows',
  gameStatus: 'gameStatus',
}

export const GameBoardContainer = styled('div', {
  shouldForwardProp: prop => !DO_NOT_FORWARD_PROPS[prop],
})<
  BoardSizes & {
    totalColumns: number
    totalRows: number
    gameStatus: GameStatus
  }
>`
  position: relative;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: grid;
  grid-template-columns: repeat(${({ totalColumns }) => totalColumns}, 1fr);
  grid-template-rows: repeat(${({ totalRows }) => totalRows}, 1fr);
  grid-gap: 2px;

  opacity: ${({ gameStatus }) => (gameStatus === GameStatus.paused ? '50%' : '100%')};
`

export const GameBoardGestureZone = styled.div`
  z-index: 5;

  width: 100%;
  height: 100%;

  display: grid;
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
  padding-top: 4px;

  font-family: simpleStamp, sans-serif;
  font-size: 24px;
  color: var(--violet);
`
