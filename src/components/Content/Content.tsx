import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { ContentContainer } from './Content.styles'
import { LevelsMenu } from '../LevelsMenu'
import { BottomNavigation } from '../BottomNavigation'
import { GameLevelType, GameStatus } from '../../types/game'
import { GameStatusTitle } from '../GameStatusTitle'
import { TutorialTips } from '../TutorialTips'

export const Content: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  const hasCurrentGame = !!currentGame
  const isGamePaused = hasCurrentGame && currentGame.status === GameStatus.paused

  const showBottomNavigation = hasCurrentGame && isGamePaused

  const showTutorialTips = hasCurrentGame && currentGame.levelType === GameLevelType.tutorial
  const showStatusTitle = hasCurrentGame && currentGame.levelType !== GameLevelType.tutorial

  return (
    <ContentContainer>
      {showTutorialTips && <TutorialTips levelId={currentGame.levelId} />}
      {hasCurrentGame && <GameBoard currentGame={currentGame} />}
      {!hasCurrentGame && <LevelsMenu />}

      {showBottomNavigation && <BottomNavigation currentGame={currentGame} />}
      {showStatusTitle && (
        <GameStatusTitle gameStatus={currentGame?.status} levelName={currentGame?.levelName} />
      )}
    </ContentContainer>
  )
}
