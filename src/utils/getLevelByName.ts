import { LEVEL_LIST } from '../constants/levels'
import { GameLevel } from '../types/game'

export const getLevelByName = (name: string): GameLevel | null => {
  return LEVEL_LIST.find(level => level.name === name) || null
}
