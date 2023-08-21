import { LOCAL_STORAGE_ITEM_NAME, LOCAL_STORAGE_VERSION } from '../constants/common'
import { AppLocalStorageData } from '../types/localStorage'

export const saveLocalStorageData = (data: AppLocalStorageData) => {
  localStorage.setItem(
    LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify({ data, version: LOCAL_STORAGE_VERSION }),
  )
}
