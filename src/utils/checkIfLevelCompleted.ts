import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { LevelID } from '../types'

export const checkIfLevelCompleted = (completedLevels: CompletedLevels, levelId: LevelID) => {
  return Boolean(completedLevels[levelId])
}
