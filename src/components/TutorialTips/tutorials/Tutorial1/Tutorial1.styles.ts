import styled from '@emotion/styled'
import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../../../../constants/board'

export const TutorialContainer = styled.div`
  position: relative;
  width: ${TILE_WIDTH * 5 + GAP_BETWEEN_TILES * 4}px;
  height: auto;

  display: grid;
  grid-template-rows: repeat(6, 60px);
  grid-gap: 16px;

  div {
    color: var(--white);
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    span {
      color: var(--acidGreen);
    }
  }

  div:nth-of-type(2) {
    font-family: simpleStamp, sans-serif;
    font-size: 56px;
    color: var(--acidGreen);
  }

  div:nth-of-type(3) {
    grid-row: 5;
  }

  div:last-of-type {
    grid-row: 6;
  }
`
