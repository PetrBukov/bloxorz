import React from 'react'

import { StatusContainer, StatusInner, StatusText } from './GameStatusTitle.styles'
import { getStatusText, getStatusTextVariant } from './GameStatusTitle.utils'
import { GameStatusTitleProps } from './GameStatusTitle.types'

export const GameStatusTitle: React.FC<GameStatusTitleProps> = ({ levelId, activeAction }) => {
  const gameStatusText = getStatusText(levelId, activeAction)
  const statusTextVariant = getStatusTextVariant(levelId, activeAction)

  const isVisible = gameStatusText.length > 0

  return (
    <StatusContainer isVisible={isVisible}>
      <StatusInner>
        {gameStatusText.map(text => (
          <StatusText key={text} variant={statusTextVariant}>
            {text}
          </StatusText>
        ))}
      </StatusInner>
    </StatusContainer>
  )
}
