import { useEffect, useState } from 'react'

import { GAME_CENTER_LOCAL_STORAGE_VERSION } from '../GameCenter.constants'
import { GameCenterState_LocalStorage } from '../GameCenter.types'
import { getGameCenterDataFromLocalStorage, saveGameCenterDataToLocalStorage } from '../utils'
import { useGameCenter } from '../GameCenter'

export const useSaveGameCenterDataToLocalStorage = () => {
  const {
    state: { lastCompletedLevel },
  } = useGameCenter()

  const [savedGameCenterData, setSavedGameCenterData] = useState<GameCenterState_LocalStorage>(
    () => {
      return getGameCenterDataFromLocalStorage()
    },
  )

  useEffect(() => {
    const { lastCompletedLevel: savedLastCompletedLevel } = savedGameCenterData

    if (lastCompletedLevel !== savedLastCompletedLevel) {
      saveGameCenterDataToLocalStorage(lastCompletedLevel)
      setSavedGameCenterData({
        lastCompletedLevel,
        version: GAME_CENTER_LOCAL_STORAGE_VERSION,
      })
    }
  }, [lastCompletedLevel, savedGameCenterData])
}
