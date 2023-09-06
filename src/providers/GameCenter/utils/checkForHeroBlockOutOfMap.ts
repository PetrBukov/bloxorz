import { TileStatus, TileType } from '../../../types'
import { Placement } from '../../../types/common'
import { GameBoardRow } from '../../../types/gameBoard'

export const checkForHeroBlockOutOfMap = ({
  heroPlacement,
  gameBoardTiles,
}: {
  heroPlacement: Placement
  gameBoardTiles: Array<GameBoardRow>
}): boolean => {
  let isHeroBlockOutOfMap = false

  for (let { x: columnIndex, y: rowIndex } of heroPlacement) {
    const tile = gameBoardTiles[rowIndex]?.[columnIndex]

    if (!tile || tile.type === TileType.empty || tile.status === TileStatus.hidden) {
      isHeroBlockOutOfMap = true
      break
    }
  }

  return isHeroBlockOutOfMap
}
