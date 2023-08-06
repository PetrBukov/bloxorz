import { STAGE_1 } from '../../constants/levels/stage_1'
import { GameStatus } from '../../types'
import { createGameForLevel, getLevelById, getLevelStageByLevelId } from '../../utils'
import { GameCenterAction, GameCenterActionType, GameCenterState } from './GameCenter.types'
import { calcStateAfterActionApplied, calcStateAfterMoving } from './utils'

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction,
): GameCenterState => {
  switch (action.type) {
    case GameCenterActionType.startNewGame: {
      const { levelId } = action

      const gameLevel = getLevelById(levelId)
      if (!gameLevel) {
        return state
      }

      return {
        ...state,
        currentGame: createGameForLevel(gameLevel, state.completedLevels),
      }
    }

    case GameCenterActionType.cancelCurrentGame: {
      const stage = getLevelStageByLevelId(state.currentGame.levelId)

      return {
        ...state,
        currentGame: createGameForLevel(stage || STAGE_1, state.completedLevels),
      }
    }

    case GameCenterActionType.pauseCurrentGame: {
      if (state.currentGame && state.currentGame.status === GameStatus.active) {
        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            status: GameStatus.paused,
          },
        }
      }

      return state
    }

    case GameCenterActionType.continueCurrentGame: {
      if (state.currentGame && state.currentGame.status === GameStatus.paused) {
        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            status: GameStatus.active,
          },
        }
      }

      return state
    }

    case GameCenterActionType.moveHeroBlock: {
      if (state.currentGame.status === GameStatus.active) {
        return calcStateAfterMoving(state, action.direction)
      }

      return state
    }

    case GameCenterActionType.applyActiveAction: {
      if (state.currentGame.status === GameStatus.actionProcessing) {
        return calcStateAfterActionApplied(state)
      }

      return state
    }

    default: {
      // @ts-ignore
      // TypeScript thinks that "Property 'type' does not exist on type 'never'"
      // but you and I know that in a real world everything is possible
      // so let's leave here some meaningful error for future us
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
