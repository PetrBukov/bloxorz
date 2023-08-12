import { Game, GameStatus, GameLevel } from '../types'
import { createGameBoardForLevel } from './createGameBoardForLevel'

export const createGameForLevel = (gameLevel: GameLevel, lastCompletedLevel: number): Game => {
  const board = createGameBoardForLevel(gameLevel, lastCompletedLevel)

  return {
    levelId: gameLevel.id,
    levelSequenceNumber: gameLevel.sequenceNumber,
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
