import React, { useCallback } from 'react'

import {
  NavigationButton,
  NavigationContainer,
  NavigationItem,
  NavigationItemsList,
} from './Navigation.styles'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types'

import { GiPlayButton, GiReturnArrow, GiAbstract050 } from 'react-icons/gi'

export const Navigation: React.FC = () => {
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

  if (currentGame.status !== GameStatus.paused) {
    return null
  }

  return (
    <NavigationContainer>
      <NavigationItemsList>
        <NavigationItem>
          <NavigationButton onClick={onContinueGame}>
            <GiPlayButton />
            <div>Continue</div>
          </NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={onRestartGame}>
            <GiReturnArrow />
            <div>Restart Level</div>
          </NavigationButton>
        </NavigationItem>
        <NavigationItem>
          <NavigationButton onClick={onCancelGame}>
            <GiAbstract050 />
            <div>Select Level</div>
          </NavigationButton>
        </NavigationItem>
      </NavigationItemsList>
    </NavigationContainer>
  )
}
