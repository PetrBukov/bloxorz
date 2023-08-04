import { LOCAL_STORAGE_ITEM_NAME, LOCAL_STORAGE_VERSION } from '../constants/localStorage'
import { LevelID } from '../types/game'

export const saveGameCenterDataToLocalStorage = (completedLevels: Record<LevelID, boolean>) => {
  localStorage.setItem(
    LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({ completedLevels, version: LOCAL_STORAGE_VERSION }),
  )
}
