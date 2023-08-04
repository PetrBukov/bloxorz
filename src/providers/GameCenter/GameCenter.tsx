import React, { PropsWithChildren } from 'react'
import { GameCenterDispatch, GameCenterState } from './GameCenter.types'
import { gameCenterReducer } from './gameCenterReducer'
import { createGameForLevel } from '../../utils/createGameFromLevel'
import { TUTORIAL_1 } from '../../constants/levels/tutorial_1'
import { LOCAL_STORAGE_ITEM_NAME, LOCAL_STORAGE_VERSION } from '../../constants/localStorage'
import { User_LocalStorage } from '../../types/user'

// Why don't I have an initial value for this context?
// read this: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const GameCenterContext = React.createContext<
  { state: GameCenterState; dispatch: GameCenterDispatch } | undefined
>(undefined)

export const GameCenter: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    gameCenterReducer,
    {
      currentGame: createGameForLevel(TUTORIAL_1, {}),
      completedLevels: {},
      nextGame: null,
    },
    defaultState => {
      const stringifiedLocalStorage = localStorage.getItem(LOCAL_STORAGE_ITEM_NAME)

      if (stringifiedLocalStorage) {
        const { version, completedLevels } = JSON.parse(
          stringifiedLocalStorage,
        ) as User_LocalStorage

        // Later we can add some handling for migrations if version of localStorage was changed
        if (version === LOCAL_STORAGE_VERSION) {
          return {
            ...defaultState,
            completedLevels,
          }
        }
      }

      return defaultState
    },
  )

  // TODO: memoize this value
  // this article may help: http://kcd.im/optimize-context
  const value = { state, dispatch }

  return <GameCenterContext.Provider value={value}>{children}</GameCenterContext.Provider>
}

export const useGameCenter = () => {
  const context = React.useContext(GameCenterContext)
  if (context === undefined) {
    throw new Error('useGameCenter must be used within a GameCenterContext')
  }

  return context
}
