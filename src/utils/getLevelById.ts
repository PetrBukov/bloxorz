import { LEVEL_LIST } from '../constants'
import { GameLevel, LevelID } from '../types'

export const getLevelById = (levelId: LevelID | null): GameLevel | null => {
  return LEVEL_LIST.find(level => level.id === levelId) || null
}
