import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { TileStatus, Direction } from '../../../types'
import { HERO_WIDTH, DIRECTION } from '../../../constants'

const hiddenStatusStyles = css`
  visibility: hidden;
`

const previousStageStyles = css`
  left: 60%;
  transform: translate(-50%, -50%) rotate(-135deg) scale(0.45);
`

export const StageTile = styled.div<{ tileStatus?: TileStatus; direction: Direction }>`
  position: relative;
  background-color: var(--white);
  display: grid;
  align-items: center;
  align-items: center;
  justify-items: center;

  div {
    z-index: 2;
    color: var(--gray300);
    font-family: simpleStamp, sans-serif;
    font-size: 32px;
    padding-top: 4px;
  }

  &::before {
    position: absolute;
    left: 40%;
    top: 50%;

    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    border-top: ${HERO_WIDTH / 2}px solid var(--violet);
    border-right: ${HERO_WIDTH / 2}px solid var(--violet);
    border-bottom: ${HERO_WIDTH / 2}px solid transparent;
    border-left: ${HERO_WIDTH / 2}px solid transparent;

    transform: translate(-50%, -50%) rotate(45deg) scale(0.45);

    ${({ direction }) => direction === DIRECTION.left && previousStageStyles}
  }

  &::after {
    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 2px solid var(--violet);
  }

  ${({ tileStatus }) => tileStatus === TileStatus.hidden && hiddenStatusStyles}
`
