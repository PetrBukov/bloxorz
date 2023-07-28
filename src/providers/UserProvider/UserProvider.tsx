import React, { PropsWithChildren } from 'react'
import { UserProviderAction, UserProviderDispatch, UserProviderState } from './UserProvider.types'
import { userProviderReducer } from './userProviderReducer'

// Why don't I have an initial value for this context?
// read this: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const UserProviderContext = React.createContext<
  { state: UserProviderState; dispatch: UserProviderDispatch } | undefined
>(undefined)

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer<
    (state: UserProviderState, action: UserProviderAction) => UserProviderState
  >(userProviderReducer, {
    completedLevels: {},
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
