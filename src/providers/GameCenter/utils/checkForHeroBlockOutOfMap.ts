import { Tile, TileStatus, TileType } from '../../../types'

export const checkForHeroBlockOutOfMap = ({
  heroBlockIndexes,
  gameBoardTiles,
}: {
  heroBlockIndexes: Array<number>
  gameBoardTiles: Array<Tile>
}): boolean => {
  let isHeroBlockOutOfMap = false

  heroBlockIndexes.forEach(tileIndex => {
    const tile = gameBoardTiles[tileIndex]

    if (!tile || tile.type === TileType.empty || tile.status === TileStatus.hidden) {
      isHeroBlockOutOfMap = true
    }
  })

  return isHeroBlockOutOfMap
}
