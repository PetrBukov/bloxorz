import React, { useCallback } from 'react'
import { HeaderContainer } from './Header.styles'
import { Button } from '../Button'
import { useGameCenter } from '../../providers/GameCenter'

export const Header: React.FC = () => {
  const { dispatch, state } = useGameCenter()

  const hasCurrentGame = Boolean(state.currentGame)

  const onStartNewGame = useCallback(() => {
    dispatch({ type: 'startNewGame', levelNumber: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCancelGame = useCallback(() => {
    dispatch({ type: 'cancelCurrentGame' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <HeaderContainer>
      <Button disabled={hasCurrentGame} onClick={onStartNewGame}>
        New Game
      </Button>
      <Button variant="outlined" disabled={!hasCurrentGame} onClick={onCancelGame}>
        Cancel
      </Button>
    </HeaderContainer>
  )
}
