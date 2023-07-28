import React, { PropsWithChildren, useEffect } from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { getNextLevelByName } from '../../utils/getNextLevelByName'

export const GameObserver: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { currentGame },
    dispatch,
  } = useGameCenter()

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (currentGame && currentGame.status === GameStatus.failure) {
      timerId = setTimeout(() => {
        dispatch({
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
      const nextLevel = getNextLevelByName(currentGame.levelName)

      if (nextLevel) {
        timerId = setTimeout(() => {
          dispatch({
            type: GameCenterActionType.startNewGame,
            levelName: nextLevel.name,
          })
        }, 2500)
      } else {
        timerId = setTimeout(() => {
          dispatch({
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
