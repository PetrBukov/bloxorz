import { css } from '@emotion/react'
import { GAP_BETWEEN_TILES } from '../../../constants/board'
import { TileSurfaceOptions } from '../../../types/tile'
import styled from '@emotion/styled'

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
