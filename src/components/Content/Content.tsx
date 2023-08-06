import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { ContentContainer } from './Content.styles'
import { BottomNavigation } from '../BottomNavigation'
import { GameStatus } from '../../types/game'
import { GameStatusTitle } from '../GameStatusTitle'
import { TutorialTips } from '../TutorialTips'

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
