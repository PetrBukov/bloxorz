import { Game, GameStatus, GameLevel } from '../types'
import { createGameBoardForLevel } from './createGameBoardForLevel'

export const createGameForLevel = (gameLevel: GameLevel, lastCompletedLevel: number): Game => {
  const board = createGameBoardForLevel(gameLevel, lastCompletedLevel)

  const { sequenceNumber, type, hero, tileTexts, moves } = gameLevel

  return {
    levelSequenceNumber: sequenceNumber,
    levelType: type,
    status: GameStatus.active,
    hero,
    tileTexts,
    board,
    moves,
    activeAction: null,
  }
}
