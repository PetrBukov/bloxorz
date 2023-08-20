import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameLevelType, GameStatus } from '../../types'
import { GiPauseButton } from 'react-icons/gi'

import { HeaderContainer, MenuButton, MovesCounter } from './Header.styles'
import { HeaderTitle } from '../HeaderTitle'

export const Header: React.FC = () => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  const onMenuClick = () => dispatch({ type: GameCenterActionType.pauseCurrentGame })

  const isIconButtonDisabled =
    currentGame.status === GameStatus.actionProcessing ||
    currentGame.levelType !== GameLevelType.regular

  return (
    <HeaderContainer>
      <MovesCounter visible={currentGame.levelType === GameLevelType.regular}>
        <div>{currentGame.moves < 99 && currentGame.moves}</div>
      </MovesCounter>
      <HeaderTitle
        levelSequenceNumber={currentGame.levelSequenceNumber}
        levelType={currentGame.levelType}
      />
      <MenuButton disabled={isIconButtonDisabled} onClick={onMenuClick}>
        <GiPauseButton size="30" />
      </MenuButton>
    </HeaderContainer>
  )
}
