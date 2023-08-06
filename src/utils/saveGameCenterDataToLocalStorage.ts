import {
  GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
  GAME_CENTER_LOCAL_STORAGE_VERSION,
} from '../providers/GameCenter/GameCenter.constants'
import { LevelID } from '../types/game'

export const saveGameCenterDataToLocalStorage = (completedLevels: Record<LevelID, boolean>) => {
  localStorage.setItem(
    GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({ completedLevels, version: GAME_CENTER_LOCAL_STORAGE_VERSION }),
  )
}
