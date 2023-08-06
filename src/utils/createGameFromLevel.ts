import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { Game, GameStatus } from '../types/game'
import { GameLevel } from '../types/gameLevel'
import { generateGameBoard } from './generateGameBoard'

export const createGameForLevel = (
  gameLevel: GameLevel,
  completedLevels: CompletedLevels,
): Game => {
  const board = generateGameBoard(gameLevel, completedLevels)

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
