import { STAGE_1 } from '../../../constants/levels/stage_1'
import { GameBoardActionType } from '../../../types/tile'
import { createGameForLevel, getLevelById, getLevelStageByLevelId } from '../../../utils'
import { GameCenterState } from '../GameCenter.types'
import { saveGameCenterDataToLocalStorage } from './saveGameCenterDataToLocalStorage'

export const calcStateAfterActionApplied = (state: GameCenterState): GameCenterState => {
  const { currentGame, completedLevels } = state

  if (!currentGame.activeAction) {
    return state
  }

  switch (currentGame.activeAction.type) {
    case GameBoardActionType.levelCompleted: {
      const levelStage = getLevelStageByLevelId(currentGame.levelId)
      const newCompletedLevels = {
        ...completedLevels,
        [currentGame.levelId]: true,
      }

      // TODO: move it out from reducer because side effect should not be here
      saveGameCenterDataToLocalStorage(newCompletedLevels)

      return {
        ...state,
        currentGame: createGameForLevel(levelStage || STAGE_1, newCompletedLevels),
        completedLevels: newCompletedLevels,
      }
    }

    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      const level = getLevelById(currentGame.levelId)

      return {
        ...state,
        currentGame: createGameForLevel(level || STAGE_1, completedLevels),
        completedLevels,
      }
    }

    case GameBoardActionType.moveToAnotherLevel: {
      const { levelId } = currentGame.activeAction
      const level = getLevelById(levelId)

      return {
        ...state,
        currentGame: createGameForLevel(level || STAGE_1, completedLevels),
      }
    }

    case GameBoardActionType.moveToAnotherStage: {
      const { stageId } = currentGame.activeAction
      const stage = getLevelById(stageId)

      return {
        ...state,
        currentGame: createGameForLevel(stage || STAGE_1, completedLevels),
      }
    }

    default: {
      return state
    }
  }
}
