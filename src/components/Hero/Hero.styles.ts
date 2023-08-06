import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

import { HERO_WIDTH } from '../../constants/board'
import { BlockPosition, BlockSizes } from '../../types/common'
import { GameBoardActionType } from '../../types/tile'

const levelFailureAnimation = keyframes`
  0% {
      filter: grayscale(0);
  }
  100% {
      filter: grayscale(1);
  }
`

const levelFailureStyles = css`
  background-color: var(--red);
  filter: grayscale(0);

  animation: ${levelFailureAnimation} 0.5s steps(2) infinite;
`

const levelCompletedStyles = css`
  opacity: 1;
`

export const HeroBlock = styled.div<
  BlockSizes & BlockPosition & { activeActionType?: GameBoardActionType }
>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  background-color: var(--acidGreen);
  border-radius: ${HERO_WIDTH / 2}px;
  border: 2px solid var(--violet);
  opacity: 0.8;

  transition-duration: 0.5s;

  ${({ activeActionType }) =>
    (activeActionType === GameBoardActionType.heroBlockOutOfMap ||
      activeActionType === GameBoardActionType.playerHasNoMoves) &&
    levelFailureStyles}
  ${({ activeActionType }) =>
    (activeActionType === GameBoardActionType.levelCompleted ||
      activeActionType === GameBoardActionType.moveToAnotherLevel) &&
    levelCompletedStyles};
`
