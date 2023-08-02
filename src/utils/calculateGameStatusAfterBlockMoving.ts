import { Coordinates, Dimensions } from '../types/common'
import { GameStatus } from '../types/game'
import { Tile } from '../types/tile'
import { checkGameForFailure } from './checkForGameFail'
import { checkForVictory } from './checkForVictory'

export const calculateGameStatusAfterBlockMoving = ({
  heroSize,
  heroPosition,
  gameLevelSize,
  gameBoardTiles,
  moves,
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  gameLevelSize: Dimensions
  gameBoardTiles: Array<Tile>
  moves: number
}): GameStatus => {
  const isVictory = checkForVictory({
    heroSize,
    heroPosition,
    gameBoardTiles,
    gameLevelSize,
  })
  if (isVictory) {
    return GameStatus.victory
  }

  const isFailure = checkGameForFailure({
    heroSize,
    heroPosition,
    gameLevelSize,
    gameBoardTiles,
    moves,
  })
  if (isFailure) {
    return GameStatus.failure
  }

  return GameStatus.active
}
