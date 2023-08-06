import styled from '@emotion/styled'

import whitegrit from '../../../assets/images/whitegrit.png'
import { HERO_WIDTH } from '../../../constants'

export const TargetTile = styled.div`
  position: relative;
  background-color: var(--acidGreen);
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    border-radius: 50%;

    background: var(--spaceViolet) url(${whitegrit});
    background-size: 500px;
  }
`
