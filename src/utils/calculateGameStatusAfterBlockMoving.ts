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
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  gameLevelSize: Dimensions
  gameBoardTiles: Array<Tile>
  target: Coordinates
}): GameStatus => {
  const isFailure = checkGameForFailure({
    heroSize,
    heroPosition,
    gameLevelSize,
    gameBoardTiles,
  })
  if (isFailure) {
    return GameStatus.failure
  }

  const isVictory = checkForVictory({
    heroSize,
    heroPosition,
    target,
  })
  if (isVictory) {
    return GameStatus.victory
  }

  return GameStatus.active
}
