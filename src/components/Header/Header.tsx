import React, { useCallback } from 'react'

import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { GameLevelType, GameStatus } from '../../types'

import { HeaderContainer } from './Header.styles'
import { HeaderTitle } from '../HeaderTitle'
import { MovesCounter } from '../MovesCounter'
import { MenuButton } from '../MenuButton'

export const Header: React.FC = () => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  const onMenuButtonClick = useCallback(
    () => dispatch({ type: GameCenterActionType.pauseCurrentGame }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

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
      <MenuButton disabled={isIconButtonDisabled} onClick={onMenuButtonClick} />
    </HeaderContainer>
  )
}
