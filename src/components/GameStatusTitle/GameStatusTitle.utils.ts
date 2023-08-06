import { LevelID } from '../../types/gameLevel'
import { GameBoardAction, GameBoardActionType } from '../../types/tile'
import { getLevelById, getFullLevelName } from '../../utils'
import { StatusTextVariant } from './GameStatusTitle.types'

export const getStatusText = (levelId: LevelID, activeAction: GameBoardAction): Array<string> => {
  if (levelId === 'tutorial-1') {
    return ["Let's solve", 'Them all 😎']
  }

  switch (activeAction.type) {
    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      return ['Oooops ...', 'Try again!']
    }
    case GameBoardActionType.levelCompleted: {
      const currentLevel = getLevelById(levelId)
      const currentLevelFullName = getFullLevelName(currentLevel?.name, currentLevel?.type)

      return [currentLevelFullName, 'Completed']
    }
    case GameBoardActionType.moveToAnotherLevel: {
      const nextLevel = getLevelById(activeAction.levelId)
      const nextLevelFullName = getFullLevelName(nextLevel?.name, nextLevel?.type)

      return ['Moving to', nextLevelFullName]
    }
    case GameBoardActionType.moveToAnotherStage: {
      const nextStage = getLevelById(activeAction.stageId)
      const nextStageFullName = getFullLevelName(nextStage?.name, nextStage?.type)

      return ['Moving to', nextStageFullName]
    }
    default:
      return []
  }
}

export const getStatusTextVariant = (
  levelId: LevelID,
  activeAction: GameBoardAction,
): StatusTextVariant => {
  if (levelId === 'tutorial-1') {
    return StatusTextVariant.info
  }

  switch (activeAction.type) {
    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      return StatusTextVariant.failure
    }
    case GameBoardActionType.levelCompleted: {
      return StatusTextVariant.success
    }
    case GameBoardActionType.moveToAnotherLevel:
    case GameBoardActionType.moveToAnotherStage:
    default:
      return StatusTextVariant.info
  }
}
