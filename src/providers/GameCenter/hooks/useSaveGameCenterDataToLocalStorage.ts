import { useEffect, useState } from 'react'

import { GAME_CENTER_LOCAL_STORAGE_VERSION } from '../GameCenter.constants'
import { GameCenterState_LocalStorage } from '../GameCenter.types'
import { getGameCenterDataFromLocalStorage, saveGameCenterDataToLocalStorage } from '../utils'
import { useGameCenter } from '../GameCenter'

export const useSaveGameCenterDataToLocalStorage = () => {
  const {
    state: { completedLevels },
  } = useGameCenter()

  const [savedGameCenterData, setSavedGameCenterData] = useState<GameCenterState_LocalStorage>(
    () => {
      return getGameCenterDataFromLocalStorage()
    },
  )

  useEffect(() => {
    const { completedLevels: savedCompletedLevels } = savedGameCenterData

    if (Object.keys(savedCompletedLevels).length !== Object.keys(completedLevels).length) {
      saveGameCenterDataToLocalStorage(completedLevels)
      setSavedGameCenterData({
        completedLevels,
        version: GAME_CENTER_LOCAL_STORAGE_VERSION,
      })
    }
  }, [completedLevels, savedGameCenterData])
}
