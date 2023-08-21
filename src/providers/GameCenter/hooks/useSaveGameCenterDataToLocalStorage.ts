import { useEffect } from 'react'

import { useGameCenter } from '../GameCenter'
import { getLocalStorageData, saveLocalStorageData } from '../../../utils'

export const useSaveGameCenterDataToLocalStorage = () => {
  const {
    state: { lastCompletedLevel },
  } = useGameCenter()

  useEffect(() => {
    const { lastCompletedLevel: savedLastCompletedLevel } = getLocalStorageData()

    if (lastCompletedLevel !== savedLastCompletedLevel) {
      saveLocalStorageData({ lastCompletedLevel })
    }
  }, [lastCompletedLevel])
}
