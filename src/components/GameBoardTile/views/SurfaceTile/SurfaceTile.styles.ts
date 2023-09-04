import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TileSurfaceOptions } from '../../../../types'

export const SurfaceTileContainer = styled.div<TileSurfaceOptions>`
  position: relative;
  overflow: hidden;

  background-color: ${({ alwaysVisible }) => (alwaysVisible ? 'var(--white)' : 'transparent')};

  > div {
    display: ${({ alwaysVisible }) => (alwaysVisible ? 'none' : 'block')};
  }

  ${({ wideRight }) =>
    wideRight &&
    css`
      grid-column: span ${wideRight};

      + div {
        display: none;
      }
    `};
`
