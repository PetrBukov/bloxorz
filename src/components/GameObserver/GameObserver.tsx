import React, { PropsWithChildren, useEffect } from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const GameObserver: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  useEffect(() => {
    if (currentGame && currentGame.status === GameStatus.failure) {
      setTimeout(() => {
        dispatch({
          type: GameCenterActionType.startNewGame,
          levelName: currentGame.levelName,
        })
      }, 2500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  return <React.Fragment>{children}</React.Fragment>
}
