import { TileStatus, TileType, TileWIthPosition } from '../../../types'
import { Dimensions, Placement } from '../../../types/common'
import { calcTileIndex } from '../../../utils'

export const checkForHeroBlockOutOfMap = ({
  heroPlacement,
  gameBoardTiles,
  gameBoardSize,
}: {
  heroPlacement: Placement
  gameBoardTiles: Array<TileWIthPosition>
  gameBoardSize: Dimensions
}): boolean => {
  let isHeroBlockOutOfMap = false

  for (let coordinates of heroPlacement) {
    const tileIndex = calcTileIndex({ coordinates, gameBoardSize })
    const tile = gameBoardTiles[tileIndex]

    if (!tile || tile.type === TileType.empty || tile.status === TileStatus.hidden) {
      isHeroBlockOutOfMap = true
      break
    }
  }

  return isHeroBlockOutOfMap
}
