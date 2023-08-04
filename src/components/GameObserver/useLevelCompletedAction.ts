import { useEffect } from 'react'

import { GameStatus } from '../../types/game'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { useGameCenter } from '../../providers/GameCenter'

export const useApplyActiveAction = () => {
  const {
    state: {
      currentGame: { status, activeAction },
    },
    dispatch,
  } = useGameCenter()

  console.log({ status })

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
