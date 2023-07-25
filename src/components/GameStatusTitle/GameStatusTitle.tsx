import React from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { FailureStatusContainer, FailureStatusInner } from './GameStatusTitle.styles'

export const GameStatusTitle: React.FC = () => {
  const { state } = useGameCenter()

  if (state.currentGame?.status === GameStatus.failure) {
    return (
      <FailureStatusContainer>
        <FailureStatusInner>
          <div>Oooops ...</div>
          <div>Try again!</div>
        </FailureStatusInner>
      </FailureStatusContainer>
    )
  }

  return null
}
