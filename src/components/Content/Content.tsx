import React from 'react'

import { useGameCenter } from '../../providers'
import { GameStatus } from '../../types'

import { GameBoard } from '../GameBoard'
import { BottomNavigation } from '../BottomNavigation'
import { GameStatusTitle } from '../GameStatusTitle'
import { TutorialTips } from '../TutorialTips'

import { ContentContainer } from './Content.styles'

export const Content: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()
  const { activeAction } = currentGame

  const showBottomNavigation = currentGame.status === GameStatus.paused
  // I would prefer to use Boolean(activeAction) here but TypeScript works not very well with this construction
  // so I have to use double NOT operator in that piece of code
  const showGameStatusTitle = !!activeAction

  return (
    <ContentContainer>
      <TutorialTips levelId={currentGame.levelId} />

      <GameBoard currentGame={currentGame} />

      {showBottomNavigation && <BottomNavigation />}

      {showGameStatusTitle && (
        <GameStatusTitle levelId={currentGame.levelId} activeAction={activeAction} />
      )}
    </ContentContainer>
  )
}
