import { useEffect } from 'react'

import { getGameCenterDataFromLocalStorage, saveGameCenterDataToLocalStorage } from '../utils'
import { useGameCenter } from '../GameCenter'

export const useSaveGameCenterDataToLocalStorage = () => {
  const {
    state: { lastCompletedLevel },
  } = useGameCenter()

  useEffect(() => {
    const { lastCompletedLevel: savedLastCompletedLevel } = getGameCenterDataFromLocalStorage()

    if (lastCompletedLevel !== savedLastCompletedLevel) {
      saveGameCenterDataToLocalStorage(lastCompletedLevel)
    }
  }, [lastCompletedLevel])
}
