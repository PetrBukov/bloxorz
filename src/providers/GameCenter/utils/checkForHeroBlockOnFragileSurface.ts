import { Tile, TileType } from '../../../types'

export const checkForHeroBlockOnFragileSurface = ({
  heroBlockIndexes,
  gameBoardTiles,
}: {
  heroBlockIndexes: Array<number>
  gameBoardTiles: Array<Tile>
}): boolean => {
  let isHeroBlockOnFragileSurface = false

  // if Hero block is not a square it can't activate fragile surface
  if (heroBlockIndexes.length > 1) {
    return isHeroBlockOnFragileSurface
  }

  heroBlockIndexes.forEach(tileIndex => {
    const tile = gameBoardTiles[tileIndex]

    if (tile.type === TileType.fragileSurface) {
      isHeroBlockOnFragileSurface = true
    }
  })

  return isHeroBlockOnFragileSurface
}
