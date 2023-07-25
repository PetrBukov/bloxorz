import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { ContentContainer } from './Content.styles'
import { LevelsMenu } from '../LevelsMenu'

export const Content: React.FC = () => {
  const { state } = useGameCenter()

  return (
    <ContentContainer>
      {state.currentGame && <GameBoard {...state.currentGame} />}
      {!state.currentGame && <LevelsMenu />}
    </ContentContainer>
  )
}
