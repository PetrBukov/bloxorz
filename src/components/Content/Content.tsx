import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { ContentContainer } from './Content.styles'
import { LevelsMenu } from '../LevelsMenu'
import { BottomNavigation } from '../BottomNavigation'
import { GameStatus } from '../../types/game'
import { GameStatusTitle } from '../GameStatusTitle'

export const Content: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  const hasCurrentGame = !!currentGame
  const isGamePaused = hasCurrentGame && currentGame.status === GameStatus.paused

  const showBottomNavigation = hasCurrentGame && isGamePaused

  return (
    <ContentContainer>
      {hasCurrentGame && <GameBoard currentGame={currentGame} />}
      {!hasCurrentGame && <LevelsMenu />}

      {showBottomNavigation && <BottomNavigation currentGame={currentGame} />}
      {hasCurrentGame && (
        <GameStatusTitle gameStatus={currentGame?.status} levelName={currentGame?.levelName} />
      )}
    </ContentContainer>
  )
}
