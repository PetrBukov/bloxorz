import React, { useCallback } from 'react'
import { NavContainer, PauseButton } from './Nav.styles'
import { useGameCenter } from '../../providers/GameCenter'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const Nav: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const onPauseClick = useCallback(() => {
    dispatch({ type: GameCenterActionType.pauseCurrentGame })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!state.currentGame) {
    return null
  }

  return (
    <NavContainer>
      <PauseButton onClick={onPauseClick}>Pause</PauseButton>
    </NavContainer>
  )
}
