import { Game, GameLevel, GameStatus } from '../types/game'
import { generateGameBoard } from './generateGameBoard'

export const createGameForLevel = (gameLevel: GameLevel): Game => {
  const board = generateGameBoard(gameLevel)

  return {
    levelId: gameLevel.id,
    levelName: gameLevel.name,
    levelType: gameLevel.type,
    status: GameStatus.active,
    hero: gameLevel.hero,
    tileTexts: gameLevel.tileTexts,
    board,
    moves: gameLevel.moves,
  }
}
