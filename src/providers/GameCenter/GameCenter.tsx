import React, { PropsWithChildren } from 'react'
import { GameCenterDispatch, GameCenterState } from './GameCenter.types'
import { gameCenterReducer } from './gameCenterReducer'
import { useUser } from '../UserProvider'
import { createGameForLevel } from '../../utils/createGameFromLevel'
import { TUTORIAL_1 } from '../../constants/levels/tutorial_1'

// Why don't I have an initial value for this context?
// read this: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const GameCenterContext = React.createContext<
  { state: GameCenterState; dispatch: GameCenterDispatch } | undefined
>(undefined)

export const GameCenter: React.FC<PropsWithChildren> = ({ children }) => {
  const {
    state: { completedLevels },
  } = useUser()

  const [state, dispatch] = React.useReducer(
    gameCenterReducer,
    {
      currentGame: null,
    },
    defaultState => {
      if (!completedLevels[TUTORIAL_1.id]) {
        return {
          currentGame: createGameForLevel(TUTORIAL_1),
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
