import React, { useCallback } from 'react'

import { BottomNavigationContainer } from './BottomNavigation.styles'
import { Button } from '../Button'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useGameCenter } from '../../providers/GameCenter'
import { BottomNavigationProps } from './BottomNavigation.types'

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentGame }) => {
  const { dispatch } = useGameCenter()

  const onReplayGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.startNewGame, levelName: currentGame.levelName })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const onCancelGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.cancelCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const onContinueGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.continueCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  return (
    <BottomNavigationContainer>
      <Button onClick={onContinueGame}>Resume</Button>

      <Button variant="outlined" onClick={onReplayGame}>
        Restart
      </Button>

      <Button variant="outlined" onClick={onCancelGame}>
        Levels
      </Button>
    </BottomNavigationContainer>
  )
}
