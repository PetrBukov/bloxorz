import React, { useCallback } from 'react'
import { HeaderContainer, LevelNameText, MenuButtonContainer } from './Header.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameLevelType, GameStatus } from '../../types/game'
import { IconButton } from '../IconButton'

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

  if (currentGame.levelType !== GameLevelType.regular) {
    return null
  }

  const isIconButtonDisabled =
    currentGame.status === GameStatus.victory || currentGame.status === GameStatus.failure
  const iconButtonType = currentGame.status === GameStatus.paused ? 'close' : 'pause'

  return (
    <HeaderContainer>
      <MenuButtonContainer>
        <IconButton
          iconType={iconButtonType}
          disabled={isIconButtonDisabled}
          onClick={onMenuClick}
        />
      </MenuButtonContainer>
      <LevelNameText>Level {currentGame.levelName}</LevelNameText>
    </HeaderContainer>
  )
}
