import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { GAP_BETWEEN_TILES } from '../../../constants'
import { TileSurfaceOptions } from '../../../types'

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
