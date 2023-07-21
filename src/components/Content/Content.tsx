import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameBoard } from '../GameBoard'
import { Hero } from '../Hero'
import { ContentContainer } from './Content.styled'

export const Content: React.FC = () => {
  const { state } = useGameCenter()

  return (
    <ContentContainer>
      {state.currentGame && <GameBoard {...state.currentGame.board} />}
      {state.currentGame && <Hero {...state.currentGame.hero} />}
    </ContentContainer>
  )
}
