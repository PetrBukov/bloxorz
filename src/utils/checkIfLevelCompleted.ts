import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { LevelID } from '../types/game'

export const checkIfLevelCompleted = (levelId: LevelID, completedLevels: CompletedLevels) => {
  return Boolean(completedLevels[levelId])
}
