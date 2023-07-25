import React, { useCallback } from 'react'
import { HeaderContainer, PauseButton } from './Header.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const Header: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const onPauseClick = useCallback(() => {
    dispatch({ type: GameCenterActionType.pauseCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!state.currentGame) {
    return null
  }

  return (
    <HeaderContainer>
      <PauseButton onClick={onPauseClick}>Pause</PauseButton>
    </HeaderContainer>
  )
}
