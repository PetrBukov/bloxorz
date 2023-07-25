import React, { useCallback } from 'react'

import { BottomNavigationContainer } from './BottomNavigation.styles'
import { Button } from '../Button'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useGameCenter } from '../../providers/GameCenter'
import { getNextLevelByName } from '../../utils/getNextLevelByName'
import { GameStatus } from '../../types/game'
import { BottomNavigationProps } from './BottomNavigation.types'

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentGame }) => {
  const { dispatch } = useGameCenter()
  const nextLevel = getNextLevelByName(currentGame?.levelName || '')

  const onReplayGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.startNewGame, levelName: currentGame.levelName })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const onNextLevelStart = useCallback(() => {
    if (nextLevel) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: nextLevel.name })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextLevel])

  const onCancelGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.cancelCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const onContinueGame = useCallback(() => {
    dispatch({ type: GameCenterActionType.continueCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  const isGamePaused = currentGame.status === GameStatus.paused
  const isVictory = currentGame.status === GameStatus.victory

  const replayButtonText = isGamePaused ? 'Restart' : 'Replay'

  return (
    <BottomNavigationContainer>
      {isGamePaused && <Button onClick={onContinueGame}>Resume</Button>}

      <Button variant="outlined" onClick={onReplayGame}>
        {replayButtonText}
      </Button>

      {isVictory && (
        <Button variant="outlined" disabled={!nextLevel} onClick={onNextLevelStart}>
          Next
        </Button>
      )}

      <Button variant="outlined" onClick={onCancelGame}>
        Levels
      </Button>
    </BottomNavigationContainer>
  )
}
