import React from 'react'

import { ContentContainer } from './Content.styled'
import { GameBoard } from '../GameBoard'
import { useGameCenter } from '../../providers/GameCenter'

export const Content: React.FC = () => {
  const { state } = useGameCenter()

  return (
    <ContentContainer>
      {state.currentGame && <GameBoard tiles={state.currentGame.board.tiles || []} />}
    </ContentContainer>
  )
}
