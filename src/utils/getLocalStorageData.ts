import { LOCAL_STORAGE_ITEM_NAME, LOCAL_STORAGE_VERSION } from '../constants/common'
import { AppLocalStorageData, AppLocalStorage } from '../types/localStorage'

export const getLocalStorageData = (): AppLocalStorageData => {
  const stringifiedAppLocalStorage = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME)

  if (stringifiedAppLocalStorage) {
    const appLocalStorage = JSON.parse(stringifiedAppLocalStorage) as AppLocalStorage

    // TODO: Add migrations handling here to avoid losing player progress if version of localStorage was changed
    if (appLocalStorage.version === LOCAL_STORAGE_VERSION) {
      return appLocalStorage.data
    }
  }

  return {
    lastCompletedLevel: 0,
  }
}
