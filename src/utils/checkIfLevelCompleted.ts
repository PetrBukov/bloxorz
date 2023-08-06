import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { LevelID } from '../types/gameLevel'

export const checkIfLevelCompleted = (completedLevels: CompletedLevels, levelId: LevelID) => {
  return Boolean(completedLevels[levelId])
}
