import styled from '@emotion/styled'

import { appearanceAnimation } from '../../App.styles'

export const ContentContainer = styled.main`
  position: relative;

  overflow: hidden;
  padding: 12px 24px 38px 24px;

  display: grid;
  justify-items: center;
  align-items: center;

  animation: ${appearanceAnimation} linear 2s;
`
