import { TileType } from '../../../types'
import { Placement } from '../../../types/common'
import { GameBoardRow } from '../../../types/gameBoard'
import { checkForSquareBlock, getSize } from '../../../utils'

export const checkForHeroBlockOnFragileSurface = ({
  heroPlacement,
  gameBoardTiles,
}: {
  heroPlacement: Placement
  gameBoardTiles: Array<GameBoardRow>
}): boolean => {
  let isHeroBlockOnFragileSurface = false

  let size = getSize(heroPlacement)
  let isSquareBlock = checkForSquareBlock(size)

  // if Hero block is not a square it can't activate fragile surface
  if (!isSquareBlock) {
    return isHeroBlockOnFragileSurface
  }

  for (let { x: columnIndex, y: rowIndex } of heroPlacement) {
    const tile = gameBoardTiles[rowIndex]?.[columnIndex]

    if (tile && tile.type === TileType.fragileSurface) {
      isHeroBlockOnFragileSurface = true
      break
    }
  }

  return isHeroBlockOnFragileSurface
}
