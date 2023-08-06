import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

import { GAP_BETWEEN_TILES, TILE_WIDTH } from '../../../../constants'

const noticeAnimation = keyframes`
    0% {
        opacity: 70%;
        transform: scale(1);
    }
    40% {
        opacity: 90%;
        transform: scale(1.005);
    }
    100% {
        opacity: 70%;
        transform: scale(1);
    }
`

export const SageTipsContainer = styled.div`
  position: relative;
  width: ${TILE_WIDTH * 5 + GAP_BETWEEN_TILES * 4}px;

  display: grid;
  grid-template-rows: repeat(8, ${TILE_WIDTH}px);
  grid-gap: ${GAP_BETWEEN_TILES}px;

  div {
    grid-row: 8;
    padding: 4px 8px;
    color: var(--white);
    font-size: 16px;
    text-align: center;

    opacity: 50%;
    transform: scale(1);
    animation: ${noticeAnimation} 3s infinite;

    span {
      color: var(--acidGreen);
    }
  }
`
