import React, { useCallback } from 'react'
import { HeaderContainer, MenuButton, LevelName, MenuButtonContainer } from './Header.styles'
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
      <MenuButtonContainer>
        <MenuButton icon={buttonIcon} disabled={pauseButtonDisabled} onClick={onMenuClick}>
          Pause
        </MenuButton>
      </MenuButtonContainer>
      <LevelName>Level {currentGame.levelName}</LevelName>
    </HeaderContainer>
  )
}
