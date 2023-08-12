import {
  GAME_CENTER_LOCAL_STORAGE_ITEM_NAME,
  GAME_CENTER_LOCAL_STORAGE_VERSION,
} from '../GameCenter.constants'
import { GameCenterState_LocalStorage } from '../GameCenter.types'

export const getGameCenterDataFromLocalStorage = (): GameCenterState_LocalStorage => {
  const stringifiedGameCenterData = localStorage.getItem(GAME_CENTER_LOCAL_STORAGE_ITEM_NAME)

  if (stringifiedGameCenterData) {
    const gameCenterState = JSON.parse(stringifiedGameCenterData) as GameCenterState_LocalStorage

    // TODO: Add migrations handling here to avoid losing player progress if version of localStorage was changed
    if (gameCenterState.version === GAME_CENTER_LOCAL_STORAGE_VERSION) {
      return gameCenterState
    }
  }

  return {
    lastCompletedLevel: 0,
    version: GAME_CENTER_LOCAL_STORAGE_VERSION,
  }
}
