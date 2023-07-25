import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { ContentContainer } from './Content.styles'
import { LevelsMenu } from '../LevelsMenu'
import { BottomNavigation } from '../BottomNavigation'
import { GameStatus } from '../../types/game'

export const Content: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  const hasCurrentGame = !!currentGame
  const isVictory = hasCurrentGame && currentGame.status === GameStatus.victory
  const isGamePaused = hasCurrentGame && currentGame.status === GameStatus.paused

  const showBottomNavigation = hasCurrentGame && (isGamePaused || isVictory)

  return (
    <ContentContainer>
      {hasCurrentGame && <GameBoard currentGame={currentGame} />}
      {!hasCurrentGame && <LevelsMenu />}

      {showBottomNavigation && <BottomNavigation currentGame={currentGame} />}
    </ContentContainer>
  )
}
