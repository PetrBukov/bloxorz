import {
  GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
  GAME_CENTER_LOCAL_STORAGE_VERSION,
} from '../GameCenter.constants'
import { LevelID } from '../../../types'

export const saveGameCenterDataToLocalStorage = (completedLevels: Record<LevelID, boolean>) => {
  localStorage.setItem(
    GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({ completedLevels, version: GAME_CENTER_LOCAL_STORAGE_VERSION }),
  )
}
