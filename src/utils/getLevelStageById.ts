import { GameLevel, LevelID } from '../types/game'
import { getLevelById } from './getLevelById'

export const getLevelStageById = (stageId: LevelID | null): GameLevel | null => {
  const currentLevel = getLevelById(stageId)
  if (!currentLevel || !currentLevel.stageId) {
    return null
  }

  return getLevelById(currentLevel.stageId)
}
