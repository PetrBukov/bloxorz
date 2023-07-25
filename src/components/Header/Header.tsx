import React, { useCallback } from 'react'
import {
  HeaderContainer,
  MovesCounterContainer,
  MovesCounterIndicator,
  MenuButton,
} from './Header.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameStatus } from '../../types/game'

export const Header: React.FC = () => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  const onMenuClick = useCallback(() => {
    if (currentGame) {
      if (currentGame.status === GameStatus.active) {
        dispatch({ type: GameCenterActionType.pauseCurrentGame })
      } else if (currentGame.status === GameStatus.paused) {
        dispatch({ type: GameCenterActionType.continueCurrentGame })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  if (!currentGame) {
    return null
  }

  const pauseButtonDisabled =
    currentGame.status === GameStatus.victory || currentGame.status === GameStatus.failure
  const buttonIcon = currentGame.status === GameStatus.paused ? 'close' : 'pause'

  return (
    <HeaderContainer>
      <MenuButton icon={buttonIcon} disabled={pauseButtonDisabled} onClick={onMenuClick}>
        Pause
      </MenuButton>
      <MovesCounterContainer>
        {/* We set key to currentGame.moves to manually run rerender of this element */}
        {/* every time amount of moves changes because it's the easiest way to run animation */}
        {/* of this block on every movement */}
        <MovesCounterIndicator key={currentGame.moves} />
        {currentGame.moves}
      </MovesCounterContainer>
    </HeaderContainer>
  )
}
