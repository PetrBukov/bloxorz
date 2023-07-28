import React, { PropsWithChildren } from 'react'
import { UserProviderDispatch, UserProviderState } from './UserProvider.types'
import { userProviderReducer } from './userProviderReducer'
import { User_LocalStorage } from '../../types/user'
import { LOCAL_STORAGE_USER_ITEM_NAME, LOCAL_STORAGE_USER_VERSION } from '../../constants/user'

// Why don't I have an initial value for this context?
// read this: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const UserProviderContext = React.createContext<
  { state: UserProviderState; dispatch: UserProviderDispatch } | undefined
>(undefined)

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(userProviderReducer, null, () => {
    const stringifiedUser = localStorage.getItem(LOCAL_STORAGE_USER_ITEM_NAME)

    if (stringifiedUser) {
      const { version, ...user } = JSON.parse(stringifiedUser) as User_LocalStorage

      // Later we can add some handling for migrations if version of localStorage was changed
      if (version === LOCAL_STORAGE_USER_VERSION) {
        return user
      }
    }

    return {
      completedLevels: {},
    }
  })

  // TODO: memoize this value
  // this article may help: http://kcd.im/optimize-context
  const value = { state, dispatch }

  return <UserProviderContext.Provider value={value}>{children}</UserProviderContext.Provider>
}

export const useUser = () => {
  const context = React.useContext(UserProviderContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a GameCenterContext')
  }

  return context
}
