import { useEffect } from 'react'

import { GameStatus } from '../../../types/game'
import { GameCenterActionType } from '../GameCenter.types'
import { useGameCenter } from '..'

export const useApplyActiveAction = () => {
  const {
    state: {
      currentGame: { status, activeAction },
    },
    dispatch,
  } = useGameCenter()

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (status === GameStatus.actionProcessing && activeAction) {
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
