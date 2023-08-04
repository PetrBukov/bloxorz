import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { GameLevelType, LevelID } from '../types/game'
import { checkIfLevelCompleted } from './checkIfLevelCompleted'
import { getLevelById } from './getLevelById'

export const checkIfStageAvailable = (stageId: LevelID, completedLevels: CompletedLevels) => {
  const stage = getLevelById(stageId)
  if (!stage) {
    return false
  }

  const previousStage = getLevelById(stage.previousLevelId)
  if (!previousStage || previousStage.type !== GameLevelType.stage) {
    return true
  }

  if (previousStage.type === GameLevelType.stage) {
    const { stageLevels } = previousStage
    return stageLevels.every(levelId => checkIfLevelCompleted(levelId, completedLevels))
  }

  return false
}
