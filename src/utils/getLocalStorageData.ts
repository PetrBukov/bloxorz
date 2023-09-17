import { LOCAL_STORAGE_ITEM_NAME, LOCAL_STORAGE_VERSION } from '../constants/common'
import { AppLocalStorageData, AppLocalStorage } from '../types/localStorage'

export const getLocalStorageData = (): AppLocalStorageData => {
  const stringifiedAppLocalStorage = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME)

  try {
    if (stringifiedAppLocalStorage) {
      const appLocalStorage = JSON.parse(stringifiedAppLocalStorage) as AppLocalStorage

      // If there is no appLocalStorage.data or appLocalStorage.data.lastCompletedLevel
      // or lastCompletedLevel has incorrect type we throw an Error
      if (typeof appLocalStorage?.data?.lastCompletedLevel !== 'number') {
        throw new Error('Incorrect lastCompletedLevel property')
      }

      // TODO: Add migrations handling here to avoid losing player progress if version of localStorage was changed
      if (appLocalStorage.version === LOCAL_STORAGE_VERSION) {
        return appLocalStorage.data
      }
    }
  } catch (e) {
    // We don't have any recovery functionality so if game data in a browser localStorage has errors
    // we just write about it in the console (so someone could fix data manually)
    // and allow our script to continue working as if there is no data at all in the localStorage
    console.error(e)
  }

  return {
    lastCompletedLevel: 0,
  }
}
