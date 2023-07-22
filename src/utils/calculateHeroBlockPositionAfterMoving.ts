import {
  HeroBlockMovingActionType,
  GameCenterActionType,
} from '../providers/GameCenter/GameCenter.types'
import { Coordinates, Dimensions } from '../types/common'
import { checkForHorizontalBlock } from './checkForHorizontalBlock'
import { checkForSquareBlock } from './checkForSquareBlock'
import { checkForVerticalBlock } from './checkForVerticalBlock'

export const calculateHeroBlockPositionAfterMoving = ({
  size,
  position,
  actionType,
}: {
  size: Dimensions
  position: Coordinates
  actionType: HeroBlockMovingActionType
}): Coordinates => {
  const isSquareBlock = checkForSquareBlock(size)
  const isHorizontalBlock = checkForHorizontalBlock(size)
  const isVerticalBlock = checkForVerticalBlock(size)

  switch (true) {
    case actionType === GameCenterActionType.moveUp && isVerticalBlock:
    case actionType === GameCenterActionType.moveUp && isHorizontalBlock: {
      return {
        ...position,
        y: position.y - 1,
      }
    }
    case actionType === GameCenterActionType.moveUp && isSquareBlock: {
      return {
        ...position,
        y: position.y - 2,
      }
    }

    case actionType === GameCenterActionType.moveRight && isVerticalBlock:
    case actionType === GameCenterActionType.moveRight && isSquareBlock: {
      return {
        ...position,
        x: position.x + 1,
      }
    }
    case actionType === GameCenterActionType.moveRight && isHorizontalBlock: {
      return {
        ...position,
        x: position.x + 2,
      }
    }

    case actionType === GameCenterActionType.moveDown && isSquareBlock:
    case actionType === GameCenterActionType.moveDown && isHorizontalBlock: {
      return {
        ...position,
        y: position.y + 1,
      }
    }
    case actionType === GameCenterActionType.moveDown && isVerticalBlock: {
      return {
        ...position,
        y: position.y + 2,
      }
    }

    case actionType === GameCenterActionType.moveLeft && isHorizontalBlock:
    case actionType === GameCenterActionType.moveLeft && isVerticalBlock: {
      return {
        ...position,
        x: position.x - 1,
      }
    }
    case actionType === GameCenterActionType.moveLeft && isSquareBlock: {
      return {
        ...position,
        x: position.x - 2,
      }
    }

    default:
      return position
  }
}
