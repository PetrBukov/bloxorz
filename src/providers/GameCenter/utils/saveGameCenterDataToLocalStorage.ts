import {
  GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
  GAME_CENTER_LOCAL_STORAGE_VERSION,
} from '../GameCenter.constants'

export const saveGameCenterDataToLocalStorage = (lastCompletedLevel: number) => {
  localStorage.setItem(
    GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({ lastCompletedLevel, version: GAME_CENTER_LOCAL_STORAGE_VERSION }),
  )
}
