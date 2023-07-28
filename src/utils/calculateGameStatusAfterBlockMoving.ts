import { Coordinates, Dimensions } from '../types/common'
import { GameStatus, Tile } from '../types/game'
import { checkGameForFailure } from './checkForGameFail'
import { checkForVictory } from './checkForVictory'

export const calculateGameStatusAfterBlockMoving = ({
  heroSize,
  heroPosition,
  gameLevelSize,
  gameBoardTiles,
  target,
  moves,
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  gameLevelSize: Dimensions
  gameBoardTiles: Array<Tile>
  target: Coordinates
  moves: number
}): GameStatus => {
  const isVictory = checkForVictory({
    heroSize,
    heroPosition,
    target,
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
