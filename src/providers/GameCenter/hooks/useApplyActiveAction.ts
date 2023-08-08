import { useEffect } from 'react'

import { GameStatus } from '../../../types'
import { GameCenterActionType } from '../GameCenter.types'
import { useGameCenter } from '../GameCenter'

export const useApplyActiveAction = () => {
  const {
    state: {
      currentGame: { status, activeAction },
    },
    dispatch,
  } = useGameCenter()

  // This piece of code is mostly needed to change status from GameStatus.actionProcessing to another status
  // as soon as all the animations, transitions and other side effects finished
  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (status === GameStatus.actionProcessing && activeAction) {
      // TODO: Think about using animationend and transitionend events instead of setTimeout
      timerId = setTimeout(() => {
        dispatch({
          type: GameCenterActionType.applyActiveAction,
        })
      }, 2500)

      return () => {
        if (timerId) {
          clearTimeout(timerId)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAction, status])
}
