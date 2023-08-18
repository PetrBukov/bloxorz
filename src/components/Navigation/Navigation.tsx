import React from 'react'

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

  const onRestartGame = () =>
    dispatch({
      type: GameCenterActionType.startNewGame,
      levelSequenceNumber: currentGame.levelSequenceNumber,
    })

  const onCancelGame = () => dispatch({ type: GameCenterActionType.cancelCurrentGame })

  const onContinueGame = () => dispatch({ type: GameCenterActionType.continueCurrentGame })

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
