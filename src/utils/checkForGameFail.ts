import { Coordinates, Dimensions } from '../types/common'
import { Tile, TileType } from '../types/tile'
import { checkForHeroBlockOutOfMap } from './checkForHeroBlockOutOfMap'
import { getRectangleTileIndexes } from './getRectangleTileIndexes'

export const checkGameForFailure = ({
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
}) => {
  let isFailure = false

  // 1 - Check case when Player run out of moves
  if (moves <= 0) {
    isFailure = true
    return isFailure
  }

  // 1 - Check cases when Hero Block is out of Map
  const isHeroBlockOutOfMap = checkForHeroBlockOutOfMap({
    heroPosition,
    heroSize,
    gameLevelSize,
  })

  if (isHeroBlockOutOfMap) {
    isFailure = true
    return isFailure
  }

  // 2 - Check cases when Hero Block is on the empty Tile
  const heroBlockIndexes = getRectangleTileIndexes({
    rectangleSize: heroSize,
    rectanglePosition: heroPosition,
    gameLevelSize,
  })

  heroBlockIndexes.forEach(tileIndex => {
    if (!gameBoardTiles[tileIndex] || gameBoardTiles[tileIndex].type === TileType.empty) {
      isFailure = true
    }
  })

  return isFailure
}
