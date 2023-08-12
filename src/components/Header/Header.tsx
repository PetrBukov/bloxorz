import React, { useCallback } from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameLevelType, GameStatus } from '../../types'
import { GiPauseButton } from 'react-icons/gi'

import { HeaderContainer, MenuButton, HeaderTitle, MovesCounter } from './Header.styles'
import { getFullLevelName } from '../../utils'

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

  const isIconButtonDisabled =
    currentGame.status === GameStatus.actionProcessing ||
    currentGame.levelType !== GameLevelType.regular

  return (
    <HeaderContainer>
      <MovesCounter visible={currentGame.levelType === GameLevelType.regular}>
        <div>{currentGame.moves < 99 && currentGame.moves}</div>
      </MovesCounter>
      <HeaderTitle>{getFullLevelName(currentGame.levelName, currentGame.levelType)}</HeaderTitle>
      <MenuButton disabled={isIconButtonDisabled} onClick={onMenuClick}>
        <GiPauseButton size="30" />
      </MenuButton>
    </HeaderContainer>
  )
}
