import React, { PropsWithChildren, useEffect } from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { getNextLevelByName } from '../../utils/getNextLevelByName'
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
          levelName: currentGame.levelName,
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
        levelName: currentGame.levelName,
      })

      const nextLevel = getNextLevelByName(currentGame.levelName)

      if (nextLevel) {
        timerId = setTimeout(() => {
          dispatchGameCenter({
            type: GameCenterActionType.startNewGame,
            levelName: nextLevel.name,
          })
        }, 2500)
      } else {
        timerId = setTimeout(() => {
          dispatchGameCenter({
            type: GameCenterActionType.cancelCurrentGame,
          })
        }, 2500)
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
