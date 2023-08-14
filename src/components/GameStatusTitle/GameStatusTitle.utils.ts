import { GameBoardAction, GameBoardActionType } from '../../types'
import { getFullLevelName, getLevelBySequenceNumber, getStageBySequenceNumber } from '../../utils'
import { StatusTextVariant } from './GameStatusTitle.types'

export const getStatusText = (
  levelSequenceNumber: number,
  activeAction: GameBoardAction,
): Array<string> => {
  switch (activeAction.type) {
    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      return ['Oooops ...', 'Try again!']
    }

    case GameBoardActionType.levelCompleted: {
      if (levelSequenceNumber === 1) {
        return ["Let's solve", 'Them all 😎']
      }

      const currentLevel = getLevelBySequenceNumber(levelSequenceNumber)
      const currentLevelFullName = getFullLevelName(levelSequenceNumber, currentLevel?.type)

      return [currentLevelFullName, 'Completed']
    }

    case GameBoardActionType.moveToAnotherLevel: {
      const nextLevel = getLevelBySequenceNumber(activeAction.levelSequenceNumber)
      const nextLevelFullName = getFullLevelName(nextLevel?.sequenceNumber, nextLevel?.type)

      return ['Moving to', nextLevelFullName]
    }

    case GameBoardActionType.moveToAnotherStage: {
      const nextStage = getStageBySequenceNumber(activeAction.stageSequenceNumber)
      const nextStageFullName = getFullLevelName(nextStage?.sequenceNumber, nextStage?.type)

      return ['Moving to', nextStageFullName]
    }

    default:
      return []
  }
}

export const getStatusTextVariant = (
  levelSequenceNumber: number,
  activeAction: GameBoardAction,
): StatusTextVariant => {
  switch (activeAction.type) {
    case GameBoardActionType.heroBlockOutOfMap:
    case GameBoardActionType.playerHasNoMoves: {
      return StatusTextVariant.failure
    }

    case GameBoardActionType.levelCompleted: {
      if (levelSequenceNumber === 1) {
        return StatusTextVariant.info
      }

      return StatusTextVariant.success
    }

    case GameBoardActionType.moveToAnotherLevel:
    case GameBoardActionType.moveToAnotherStage:
    default:
      return StatusTextVariant.info
  }
}
