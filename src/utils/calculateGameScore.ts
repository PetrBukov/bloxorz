import { GameScore } from '../types/game'
import { getLevelByName } from './getLevelByName'

export const calculateGameScore = (gameMoves: number, levelName: string): GameScore => {
  const level = getLevelByName(levelName)
  if (!level) {
    return 0
  }

  if (gameMoves <= level.moves[0]) {
    return 3
  }

  if (gameMoves <= level.moves[1]) {
    return 2
  }

  return 1
}
