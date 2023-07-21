import React, { useCallback } from 'react'
import { HeaderContainer } from './Header.styles'
import { Button } from '../Button'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const Header: React.FC = () => {
  const { dispatch, state } = useGameCenter()

  const hasCurrentGame = Boolean(state.currentGame)

  const onStartNewGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.startNewGame, levelNumber: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onCancelGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.cancelCurrentGame })
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
