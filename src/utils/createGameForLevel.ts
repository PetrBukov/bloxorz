import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { Game, GameStatus, GameLevel } from '../types'
import { createGameBoardForLevel } from './createGameBoardForLevel'

export const createGameForLevel = (
  gameLevel: GameLevel,
  completedLevels: CompletedLevels,
): Game => {
  const board = createGameBoardForLevel(gameLevel, completedLevels)

  return {
    levelId: gameLevel.id,
    levelName: gameLevel.name,
    levelType: gameLevel.type,
    status: GameStatus.active,
    hero: gameLevel.hero,
    tileTexts: gameLevel.tileTexts,
    board,
    moves: gameLevel.moves,
    activeAction: null,
  }
}
