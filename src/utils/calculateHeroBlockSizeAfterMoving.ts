import {
  GameCenterActionType,
  HeroBlockMovingActionType,
} from '../providers/GameCenter/GameCenter.types'
import { Dimensions } from '../types/common'
import { checkForHorizontalBlock } from './checkForHorizontalBlock'
import { checkForSquareBlock } from './checkForSquareBlock'
import { checkForVerticalBlock } from './checkForVerticalBlock'

export const calculateHeroBlockSizeAfterMoving = (
  size: Dimensions,
  actionType: HeroBlockMovingActionType,
): Dimensions => {
  const isSquareBlock = checkForSquareBlock(size)
  const isHorizontalBlock = checkForHorizontalBlock(size)
  const isVerticalBlock = checkForVerticalBlock(size)

  switch (true) {
    case actionType === GameCenterActionType.moveUp && isSquareBlock:
    case actionType === GameCenterActionType.moveRight && isVerticalBlock:
    case actionType === GameCenterActionType.moveDown && isSquareBlock:
    case actionType === GameCenterActionType.moveLeft && isVerticalBlock: {
      return {
        width: 1,
        height: 2,
      }
    }

    case actionType === GameCenterActionType.moveUp && isHorizontalBlock:
    case actionType === GameCenterActionType.moveRight && isSquareBlock:
    case actionType === GameCenterActionType.moveDown && isHorizontalBlock:
    case actionType === GameCenterActionType.moveLeft && isSquareBlock: {
      return {
        width: 2,
        height: 1,
      }
    }

    case actionType === GameCenterActionType.moveUp && isVerticalBlock:
    case actionType === GameCenterActionType.moveRight && isHorizontalBlock:
    case actionType === GameCenterActionType.moveDown && isVerticalBlock:
    case actionType === GameCenterActionType.moveLeft && isHorizontalBlock: {
      return {
        width: 1,
        height: 1,
      }
    }

    default:
      return size
  }
}
