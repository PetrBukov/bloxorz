import { GameBoardActionType, Tile, TileStatus, TileType } from '../types'
import { getLevelById } from './getLevelById'

export const calcTileStatus = (tile: Tile, lastCompletedLevel: number): TileStatus => {
  if (tile.type !== TileType.gameAction) {
    return TileStatus.available
  }

  const { action } = tile

  switch (action.type) {
    case GameBoardActionType.moveToAnotherLevel: {
      const { levelId } = action
      const level = getLevelById(levelId)

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
