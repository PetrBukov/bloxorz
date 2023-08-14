import { GameBoardActionType, Tile, TileStatus, TileType } from '../types'
import { getLevelBySequenceNumber } from './getLevelBySequenceNumber'

export const calcTileStatus = (tile: Tile, lastCompletedLevel: number): TileStatus => {
  if (tile.type !== TileType.gameAction) {
    return TileStatus.available
  }

  const { action } = tile

  switch (action.type) {
    case GameBoardActionType.moveToAnotherLevel: {
      const { levelSequenceNumber } = action
      const level = getLevelBySequenceNumber(levelSequenceNumber)

      if (!level) {
        return TileStatus.blocked
      }

      if (level.sequenceNumber <= lastCompletedLevel) {
        return TileStatus.activated
      }

      if (level.sequenceNumber === lastCompletedLevel + 1) {
        return TileStatus.available
      }

      return TileStatus.blocked
    }

    case GameBoardActionType.moveToAnotherStage:
    default: {
      return TileStatus.available
    }
  }
}
