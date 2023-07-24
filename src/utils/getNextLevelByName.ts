import { LEVEL_LIST } from '../constants/levels'
import { GameLevel } from '../types/game'

export const getNextLevelByName = (name: string): GameLevel | null => {
  const currentLevelIndex = LEVEL_LIST.findIndex(level => level.name === name)
  if (currentLevelIndex < 0) {
    return null
  }

  const nextLevelIndex = currentLevelIndex + 1

  return LEVEL_LIST.at(nextLevelIndex) || null
}
