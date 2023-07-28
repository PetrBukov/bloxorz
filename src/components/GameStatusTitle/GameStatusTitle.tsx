import React from 'react'

import { StatusContainer, StatusInner, StatusText } from './GameStatusTitle.styles'
import { getStatusText } from './GameStatusTitle.utils'
import { GameStatusTitleProps } from './GameStatusTitle.types'

export const GameStatusTitle: React.FC<GameStatusTitleProps> = ({ gameStatus, levelName }) => {
  const gameStatusText = getStatusText(gameStatus, levelName)

  const isVisible = gameStatusText.length > 0

  return (
    <StatusContainer isVisible={isVisible}>
      <StatusInner>
        {gameStatusText.map(text => (
          <StatusText key={text} gameStatus={gameStatus}>
            {text}
          </StatusText>
        ))}
      </StatusInner>
    </StatusContainer>
  )
}
