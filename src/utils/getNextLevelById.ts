import { GameLevel, LevelID } from '../types/game'
import { getLevelById } from './getLevelById'

export const getNextLevelById = (levelId: LevelID): GameLevel | null => {
  const currentLevel = getLevelById(levelId)
  if (!currentLevel || !currentLevel.nextLevelId) {
    return null
  }

  return getLevelById(currentLevel.nextLevelId)
}
