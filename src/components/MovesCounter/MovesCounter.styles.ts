import styled from '@emotion/styled'

import circleWIthHole from '../../assets/images/circleWIthHole.svg'

export const MovesCounterContainer = styled.div<{ visible: boolean }>`
  position: relative;
  z-index: 20;

  width: 30px;
  height: 30px;
  padding-bottom: 1px;

  display: grid;
  align-items: center;
  justify-items: center;

  opacity: ${({ visible }) => (visible ? '0.6' : '0')};
  font-size: 16px;
  font-weight: 600;

  &::before {
    content: '';
    display: box;
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    background-color: var(--white);
    border-radius: 2px;

    mask: url(${circleWIthHole});
    mask-size: 230%;
    mask-position: center;
  }
`
