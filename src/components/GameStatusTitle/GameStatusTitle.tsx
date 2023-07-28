import React, { useMemo } from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { StatusContainer, StatusInner, StatusText } from './GameStatusTitle.styles'
import { getStatusText } from './GameStatusTitle.utils'

export const GameStatusTitle: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  const gameStatusText = useMemo(
    () => getStatusText(currentGame?.status, currentGame?.levelName),
    [currentGame],
  )

  if (!currentGame || !gameStatusText) {
    return null
  }

  return (
    <StatusContainer>
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
