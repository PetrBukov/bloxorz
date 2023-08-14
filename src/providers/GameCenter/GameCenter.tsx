import React, { PropsWithChildren } from 'react'
import { GameCenterDispatch, GameCenterState } from './GameCenter.types'
import { gameCenterReducer } from './gameCenterReducer'
import { createGameForLevel } from '../../utils'
import { getGameCenterDataFromLocalStorage } from './utils'
import { useApplyActiveAction } from './hooks/useApplyActiveAction'
import { useSaveGameCenterDataToLocalStorage } from './hooks/useSaveGameCenterDataToLocalStorage'
import { LEVEL_1 } from '../../constants/levels/level_1'
import { STAGE_3 } from '../../constants/levels/stage_3'
import { getLevelBySequenceNumber } from '../../utils/getLevelBySequenceNumber'

// Why don't I have an initial value for this context?
// read this: https://kentcdodds.com/blog/how-to-use-react-context-effectively
const GameCenterContext = React.createContext<
  { state: GameCenterState; dispatch: GameCenterDispatch } | undefined
>(undefined)

/**
 * We use this component to observe GameCenterState
 * and run side effects when we need it
 */
const GameCenterObserver: React.FC<PropsWithChildren> = ({ children }) => {
  useApplyActiveAction()
  useSaveGameCenterDataToLocalStorage()

  return <React.Fragment>{children}</React.Fragment>
}

export const GameCenter: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    gameCenterReducer,
    {
      currentGame: createGameForLevel(LEVEL_1, 0),
      lastCompletedLevel: 0,
      nextGame: null,
    },
    defaultState => {
      const { lastCompletedLevel } = getGameCenterDataFromLocalStorage()
      const nextLevel = getLevelBySequenceNumber(lastCompletedLevel + 1) || STAGE_3

      return {
        ...defaultState,
        lastCompletedLevel,
        currentGame: createGameForLevel(nextLevel, lastCompletedLevel),
      }
    },
  )

  // TODO: memoize this value
  // this article may help: http://kcd.im/optimize-context
  const value = { state, dispatch }

  return (
    <GameCenterContext.Provider value={value}>
      <GameCenterObserver>{children}</GameCenterObserver>
    </GameCenterContext.Provider>
  )
}

export const useGameCenter = () => {
  const context = React.useContext(GameCenterContext)
  if (context === undefined) {
    throw new Error('useGameCenter must be used within a GameCenterContext')
  }

  return context
}
