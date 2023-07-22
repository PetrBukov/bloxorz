import { Coordinates, Dimensions } from '../types/common'
import { Tile, TileType } from '../types/game'
import { getRectangleTileIndexes } from './getRectangleTileIndexes'

export const checkGameForFailure = ({
  heroSize,
  heroPosition,
  gameLevelSize,
  gameBoardTiles,
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  gameLevelSize: Dimensions
  gameBoardTiles: Array<Tile>
}) => {
  let isFailure = false

  const heroBlockIndexes = getRectangleTileIndexes({
    rectangleSize: heroSize,
    rectanglePosition: heroPosition,
    gameLevelSize,
  })

  console.log({ heroBlockIndexes })

  heroBlockIndexes.forEach(tileIndex => {
    if (!gameBoardTiles[tileIndex] || gameBoardTiles[tileIndex].type === TileType.empty) {
      isFailure = true
    }
  })

  return isFailure
}
