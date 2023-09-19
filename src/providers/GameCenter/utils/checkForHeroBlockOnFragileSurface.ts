import { TileType, TileWIthPosition } from '../../../types'
import { Dimensions, Placement } from '../../../types/common'
import { calcTileIndex, checkForSquareBlock, getSize } from '../../../utils'

export const checkForHeroBlockOnFragileSurface = ({
  heroPlacement,
  gameBoardTiles,
  gameBoardSize,
}: {
  heroPlacement: Placement
  gameBoardTiles: Array<TileWIthPosition>
  gameBoardSize: Dimensions
}): boolean => {
  let isHeroBlockOnFragileSurface = false

  let size = getSize(heroPlacement)
  let isSquareBlock = checkForSquareBlock(size)

  // if Hero block is not a square it can't activate fragile surface
  if (!isSquareBlock) {
    return isHeroBlockOnFragileSurface
  }

  for (let coordinates of heroPlacement) {
    const tileIndex = calcTileIndex({ coordinates, gameBoardSize })
    const tile = gameBoardTiles[tileIndex]

    if (tile && tile.type === TileType.fragileSurface) {
      isHeroBlockOnFragileSurface = true
      break
    }
  }

  return isHeroBlockOnFragileSurface
}
