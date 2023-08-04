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

  const showBottomNavigation = currentGame.status === GameStatus.paused

  const { activeAction } = currentGame

  const showGameStatusTitle = !!activeAction

  return (
    <ContentContainer>
      <TutorialTips levelId={currentGame.levelId} />

      <GameBoard currentGame={currentGame} />

      {showBottomNavigation && <BottomNavigation currentGame={currentGame} />}
      {showGameStatusTitle && (
        <GameStatusTitle levelId={currentGame.levelId} activeAction={activeAction} />
      )}
    </ContentContainer>
  )
}
