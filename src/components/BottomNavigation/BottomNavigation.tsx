import React, { useCallback } from 'react'

import { BottomNavigationContainer } from './BottomNavigation.styles'
import { Button } from '../Button'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useGameCenter } from '../../providers/GameCenter'

export const BottomNavigation: React.FC = () => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  const onRestartGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.startNewGame, levelId: currentGame.levelId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const onCancelGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.cancelCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onContinueGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.continueCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BottomNavigationContainer>
      <Button onClick={onContinueGame}>Resume</Button>

      <Button variant="outlined" onClick={onRestartGame}>
        Restart
      </Button>

      <Button variant="outlined" onClick={onCancelGame}>
        Levels
      </Button>
    </BottomNavigationContainer>
  )
}
