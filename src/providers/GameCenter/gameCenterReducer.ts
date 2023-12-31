import { STAGE_1 } from '../../constants/levels/stage_1'
import { GameStatus } from '../../types'
import {
  calcStageSequenceNumber,
  createGameForLevel,
  getLevelBySequenceNumber,
  getStageBySequenceNumber,
} from '../../utils'
import { GameCenterAction, GameCenterActionType, GameCenterState } from './GameCenter.types'
import { calcStateAfterActionApplied, calcStateAfterMoving } from './utils'

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction,
): GameCenterState => {
  switch (action.type) {
    case GameCenterActionType.startNewGame: {
      const { levelSequenceNumber } = action

      const gameLevel = getLevelBySequenceNumber(levelSequenceNumber)
      if (!gameLevel) {
        return state
      }

      return {
        ...state,
        currentGame: createGameForLevel(gameLevel, state.lastCompletedLevel),
      }
    }

    case GameCenterActionType.cancelCurrentGame: {
      const stageSequenceNumber = calcStageSequenceNumber(state.currentGame.levelSequenceNumber)
      const gameStage = getStageBySequenceNumber(stageSequenceNumber)

      return {
        ...state,
        currentGame: createGameForLevel(gameStage || STAGE_1, state.lastCompletedLevel),
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
