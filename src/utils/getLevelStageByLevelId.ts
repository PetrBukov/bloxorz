import { GameLevel, LevelID } from '../types'
import { getLevelById } from './getLevelById'

export const getLevelStageByLevelId = (stageId: LevelID | null): GameLevel | null => {
  const currentLevel = getLevelById(stageId)
  if (!currentLevel || !currentLevel.stageId) {
    return null
  }

  return getLevelById(currentLevel.stageId)
}
