import { CompletedLevels } from '../providers/GameCenter/GameCenter.types'
import { GameBoardActionType, Tile, TileStatus, TileType } from '../types'
import { checkIfStageAvailable } from './checkIfStageAvailable'
import { getLevelById } from './getLevelById'

export const calcTileStatus = (tile: Tile, completedLevels: CompletedLevels): TileStatus => {
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

      if (completedLevels[level.id]) {
        return TileStatus.activated
      }

      if (!level.previousLevelId || completedLevels[level.previousLevelId]) {
        return TileStatus.available
      }

      return TileStatus.blocked
    }
    case GameBoardActionType.moveToAnotherStage: {
      const isStageAvailable = checkIfStageAvailable(completedLevels, action.stageId)
      return isStageAvailable ? TileStatus.available : TileStatus.hidden
    }
    default: {
      return TileStatus.available
    }
  }
}
