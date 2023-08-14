import React from 'react'

import { useGameCenter } from '../../providers'

import { GameBoard } from '../GameBoard'
import { GameStatusTitle } from '../GameStatusTitle'
import { TutorialTips } from '../TutorialTips'

import { ContentContainer } from './Content.styles'

export const Content: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()
  const { activeAction, levelSequenceNumber, levelType } = currentGame

  // I would prefer to use Boolean(activeAction) here but TypeScript works not very well with this construction
  // so I have to use double NOT operator in that piece of code
  const showGameStatusTitle = !!activeAction

  return (
    <ContentContainer>
      <TutorialTips levelSequenceNumber={levelSequenceNumber} levelType={levelType} />

      <GameBoard currentGame={currentGame} />

      {showGameStatusTitle && (
        <GameStatusTitle levelSequenceNumber={levelSequenceNumber} activeAction={activeAction} />
      )}
    </ContentContainer>
  )
}
