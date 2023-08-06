import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { HERO_WIDTH, TILE_WIDTH } from '../../../constants'
import { TileStatus } from '../../../types'

const availableStatusStyles = css`
  background-color: var(--gray200);

  div {
    color: var(--violet);
  }

  &::before {
    background: var(--gray200);
    border: 2px solid var(--violet);
  }
`

const blockedStatusStyles = css`
  background-color: var(--gray200);

  div {
    color: var(--gray300);
  }

  &::before {
    background: var(--gray200);
    border: 2px solid var(--gray300);
  }
`

const activatedStatusStyles = css`
  background-color: var(--acidGreen);

  div {
    color: var(--violet);
  }

  &::before {
    background: var(--black);
    opacity: 9%;
    width: ${TILE_WIDTH}px;
    height: ${TILE_WIDTH}px;
    border-radius: 0px;
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
    background: var(--acidGreen);
  }
`

export const LevelTile = styled.div<{ tileStatus?: TileStatus }>`
  position: relative;
  background-color: var(--gray300);
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
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    content: '';
    display: block;
    width: ${HERO_WIDTH}px;
    height: ${HERO_WIDTH}px;

    border-radius: 50%;

    background: var(--violet);
    background-size: 500px;
  }

  ${({ tileStatus }) => tileStatus === TileStatus.available && availableStatusStyles}
  ${({ tileStatus }) => tileStatus === TileStatus.blocked && blockedStatusStyles}
  ${({ tileStatus }) => tileStatus === TileStatus.activated && activatedStatusStyles}
`
