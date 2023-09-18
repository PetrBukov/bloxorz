import {
  GameBoardAction,
  GameBoardActionType,
  TileStatus,
  TileType,
  TileWIthPosition,
} from '../../../types'
import { Dimensions, Placement } from '../../../types/common'
import { calcTileIndex, checkForSquareBlock, getSize } from '../../../utils'

export const getGameBoardAction = ({
  heroPlacement,
  gameBoardTiles,
  gameBoardSize,
}: {
  heroPlacement: Placement
  gameBoardTiles: Array<TileWIthPosition>
  gameBoardSize: Dimensions
}): GameBoardAction | null => {
  let gameBoardAction = null

  const size = getSize(heroPlacement)
  const isSquareBlock = checkForSquareBlock(size)
  // An action is considered selected only if the Hero is square,
  // in other words it has only one index so if Hero Block has more than one index
  // we always return null
  if (!isSquareBlock) {
    return gameBoardAction
  }

  outerForLoop: for (let coordinates of heroPlacement) {
    const tileIndex = calcTileIndex({ coordinates, gameBoardSize })
    const tile = gameBoardTiles[tileIndex]

    if (tile && tile.type === TileType.gameAction) {
      const { action } = tile
      switch (action.type) {
        case GameBoardActionType.moveToAnotherLevel: {
          const shouldActionApplied =
            tile.status === TileStatus.activated || tile.status === TileStatus.available

          gameBoardAction = shouldActionApplied ? tile.action : null
          break outerForLoop
        }

        case GameBoardActionType.moveToAnotherStage: {
          const shouldActionApplied =
            tile.status === TileStatus.activated || tile.status === TileStatus.available

          gameBoardAction = shouldActionApplied ? tile.action : null
          break outerForLoop
        }

        default: {
          gameBoardAction = tile.action
          break outerForLoop
        }
      }
    }
  }

  return gameBoardAction
}
