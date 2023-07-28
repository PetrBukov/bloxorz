import React from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { StatusContainer, StatusInner, StatusText } from './GameStatusTitle.styles'
import { getStatusText } from './GameStatusTitle.utils'

export const GameStatusTitle: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  const gameStatusText = getStatusText(currentGame?.status, currentGame?.levelName)

  const isVisible = gameStatusText.length > 0

  if (!currentGame) {
    return null
  }

  return (
    <StatusContainer isVisible={isVisible}>
      <StatusInner>
        {gameStatusText.map(text => (
          <StatusText key={text} gameStatus={currentGame.status}>
            {text}
          </StatusText>
        ))}
      </StatusInner>
    </StatusContainer>
  )
}
