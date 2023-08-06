import { useEffect, useState } from 'react'
import { useGameCenter } from '..'
import { GameCenterState_LocalStorage } from '../GameCenter.types'
import { getGameCenterDataFromLocalStorage } from '../utils/getGameCenterDataFromLocalStorage'
import { saveGameCenterDataToLocalStorage } from '../../../utils/saveGameCenterDataToLocalStorage'
import { GAME_CENTER_LOCAL_STORAGE_VERSION } from '../GameCenter.constants'

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
