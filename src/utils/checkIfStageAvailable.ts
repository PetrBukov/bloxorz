import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { GameLevelType, LevelID } from '../types/gameLevel'
import { checkIfLevelCompleted } from './checkIfLevelCompleted'
import { getLevelById } from './getLevelById'

export const checkIfStageAvailable = (completedLevels: CompletedLevels, stageId: LevelID) => {
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
    return stageLevels.every(levelId => checkIfLevelCompleted(completedLevels, levelId))
  }

  return false
}
