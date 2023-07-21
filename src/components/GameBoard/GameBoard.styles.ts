import styled from '@emotion/styled'

export const SurfaceTitle = styled.div`
  background-color: var(--white);
`

export const EmptyTitle = styled.div``

export const TargetTitle = styled.div`
  background-color: var(--yellow);
`
export const GameBoardContainer = styled.div`
  display: grid;
  width: 240px;
  height: 480px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 2px;
`
