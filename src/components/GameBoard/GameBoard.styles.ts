import styled from '@emotion/styled'

import { BoardSizes } from './GameBoard.types'

export const SurfaceTitle = styled.div`
  background-color: var(--white);
`

export const EmptyTitle = styled.div``

export const TargetTitle = styled.div`
  background-color: var(--yellow);
`
export const GameBoardContainer = styled.div<
  BoardSizes & {
    totalColumns: number
    totalRows: number
  }
>`
  display: grid;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  grid-template-columns: repeat(${({ totalColumns }) => totalColumns}, 1fr);
  grid-template-rows: repeat(${({ totalRows }) => totalRows}, 1fr);
  grid-gap: 2px;
`
