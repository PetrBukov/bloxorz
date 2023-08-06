import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { LevelID } from '../types/gameLevel'

export const checkIfLevelCompleted = (levelId: LevelID, completedLevels: CompletedLevels) => {
  return Boolean(completedLevels[levelId])
}
