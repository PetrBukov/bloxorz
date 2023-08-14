import React from 'react'

import { StatusContainer, StatusInner, StatusText } from './GameStatusTitle.styles'
import { getStatusText, getStatusTextVariant } from './GameStatusTitle.utils'
import { GameStatusTitleProps } from './GameStatusTitle.types'

export const GameStatusTitle: React.FC<GameStatusTitleProps> = ({
  levelSequenceNumber,
  activeAction,
}) => {
  const gameStatusText = getStatusText(levelSequenceNumber, activeAction)
  const statusTextVariant = getStatusTextVariant(levelSequenceNumber, activeAction)

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
