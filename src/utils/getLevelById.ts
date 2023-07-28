import { LEVEL_LIST } from '../constants/levels'
import { GameLevel, LevelID } from '../types/game'

export const getLevelById = (levelId: LevelID): GameLevel | null => {
  return LEVEL_LIST.find(level => level.id === levelId) || null
}
