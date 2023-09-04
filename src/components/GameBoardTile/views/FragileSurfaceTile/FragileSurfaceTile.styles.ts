import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const splitAnimation = keyframes`
  0% {
    opacity: 30%;
  }
  100% {
    opacity: 0%;
  }
`

const withSplitAnimation = css`
  opacity: 0%;
  animation: ${splitAnimation} 0.5s linear;
`

export const FragileSurfaceTileContainer = styled.div<{ showSplitAnimation: boolean }>`
  position: relative;
  overflow: hidden;

  opacity: 30%;
  ${({ showSplitAnimation }) => showSplitAnimation && withSplitAnimation}
`
