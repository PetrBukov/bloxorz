import React, { PropsWithChildren, useEffect } from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameLevelType, GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { getNextLevelById } from '../../utils/getNextLevelById'
import { useUser } from '../../providers/UserProvider'
import { UserProviderActionType } from '../../providers/UserProvider/UserProvider.types'

export const GameObserver: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { currentGame },
    dispatch: dispatchGameCenter,
  } = useGameCenter()

  const { dispatch: dispatchUser } = useUser()

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (currentGame && currentGame.status === GameStatus.failure) {
      timerId = setTimeout(() => {
        dispatchGameCenter({
          type: GameCenterActionType.startNewGame,
          levelId: currentGame.levelId,
        })
      }, 2500)
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (currentGame && currentGame.status === GameStatus.victory) {
      dispatchUser({
        type: UserProviderActionType.gameLevelCompleted,
        levelId: currentGame.levelId,
      })

      const nextLevel = getNextLevelById(currentGame.levelId)

      if (nextLevel) {
        timerId = setTimeout(() => {
          dispatchGameCenter({
            type: GameCenterActionType.startNewGame,
            levelId: nextLevel.id,
          })
        }, 2500)
      } else {
        const time = currentGame.levelType === GameLevelType.tutorial ? 1000 : 2500
        timerId = setTimeout(() => {
          dispatchGameCenter({
            type: GameCenterActionType.cancelCurrentGame,
          })
        }, time)
      }
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentGame])

  return <React.Fragment>{children}</React.Fragment>
}
