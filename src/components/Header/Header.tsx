import React from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameLevelType, GameStatus } from '../../types'
import { GiPauseButton } from 'react-icons/gi'

import { HeaderContainer, MenuButton } from './Header.styles'
import { HeaderTitle } from '../HeaderTitle'
import { MovesCounter } from '../MovesCounter'

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
      <MovesCounter
        visible={currentGame.levelType === GameLevelType.regular}
        moves={currentGame.moves}
      />
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
