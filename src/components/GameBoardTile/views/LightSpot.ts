import styled from '@emotion/styled'
import { ElementPosition } from '../../../types'
import { LIGHT_SPOT_SIZE, TILE_WIDTH } from '../../../constants'

const DO_NOT_FORWARD_PROPS: Record<string, string> = {
  top: 'top',
  left: 'left',
}

export const LightSpot = styled('div', {
  shouldForwardProp: prop => !DO_NOT_FORWARD_PROPS[prop],
})<ElementPosition>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${LIGHT_SPOT_SIZE}px;
  height: ${LIGHT_SPOT_SIZE}px;

  background-color: var(--white);

  border-radius: 50%;
  box-shadow: 0 0 40px ${TILE_WIDTH * 2}px var(--white);

  transition-duration: 0.5s;
`
