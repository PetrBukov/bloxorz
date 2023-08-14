import styled from '@emotion/styled'

import circleWIthHole from '../../../assets/images/circleWIthHole.svg'

export const TargetTile = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  div {
    z-index: 2;
    color: var(--acidGreen);
    font-family: simpleStamp, sans-serif;
    font-size: 32px;
    padding-top: 4px;
  }

  &::before {
    content: '';
    display: box;
    background-color: var(--acidGreen);
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    mask: url(${circleWIthHole});
    mask-size: 230%;
    mask-position: center;
  }
`
