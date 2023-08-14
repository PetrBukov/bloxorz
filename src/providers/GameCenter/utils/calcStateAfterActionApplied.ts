import { STAGE_1 } from '../../../constants/levels/stage_1'
import { STAGE_3 } from '../../../constants/levels/stage_3'
import { GameBoardActionType, GameLevelType } from '../../../types'
import {
  createGameForLevel,
  getLevelById,
  getLevelBySequenceNumber,
  getStageBySequenceNumber,
} from '../../../utils'
import { GameCenterState } from '../GameCenter.types'

export const calcStateAfterActionApplied = (state: GameCenterState): GameCenterState => {
  const { currentGame, lastCompletedLevel } = state

  if (!currentGame.activeAction) {
    return state
  }

  switch (currentGame.activeAction.type) {
    case GameBoardActionType.levelCompleted: {
      const nextLevel = getLevelBySequenceNumber(currentGame.levelSequenceNumber + 1)
      const newLastCompletedLevel =
        lastCompletedLevel < currentGame.levelSequenceNumber
          ? currentGame.levelSequenceNumber
          : lastCompletedLevel

      return {
        ...state,
        currentGame: createGameForLevel(nextLevel || STAGE_3, newLastCompletedLevel),
        lastCompletedLevel: newLastCompletedLevel,
      }
    }

    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      const { levelType, levelSequenceNumber } = currentGame

      const level =
        levelType === GameLevelType.regular
          ? getLevelBySequenceNumber(levelSequenceNumber)
          : getStageBySequenceNumber(levelSequenceNumber)

      return {
        ...state,
        currentGame: createGameForLevel(level || STAGE_1, lastCompletedLevel),
      }
    }

    case GameBoardActionType.moveToAnotherLevel: {
      const { levelId } = currentGame.activeAction
      const level = getLevelById(levelId)

      return {
        ...state,
        currentGame: createGameForLevel(level || STAGE_1, lastCompletedLevel),
      }
    }

    case GameBoardActionType.moveToAnotherStage: {
      const { stageId } = currentGame.activeAction
      const stage = getLevelById(stageId)

      return {
        ...state,
        currentGame: createGameForLevel(stage || STAGE_1, lastCompletedLevel),
      }
    }

    default: {
      return state
    }
  }
}
