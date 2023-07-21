import { GameCenterActionType } from '../providers/GameCenter/GameCenter.types'
import { Dimensions } from '../types/common'

type KeyboardActions =
  | GameCenterActionType.moveDown
  | GameCenterActionType.moveLeft
  | GameCenterActionType.moveRight
  | GameCenterActionType.moveUp

export const calculateHeroBlockSizeAfterMoving = (
  size: Dimensions,
  actionType: KeyboardActions,
): Dimensions => {
  const squareBlock = size.width === size.height
  const horizontalBlock = size.width > size.height
  const verticalBlock = size.height > size.width

  switch (true) {
    case actionType === GameCenterActionType.moveUp && squareBlock:
    case actionType === GameCenterActionType.moveRight && verticalBlock:
    case actionType === GameCenterActionType.moveDown && squareBlock:
    case actionType === GameCenterActionType.moveLeft && verticalBlock: {
      return {
        width: 1,
        height: 2,
      }
    }
    case actionType === GameCenterActionType.moveUp && horizontalBlock:
    case actionType === GameCenterActionType.moveRight && squareBlock:
    case actionType === GameCenterActionType.moveDown && horizontalBlock:
    case actionType === GameCenterActionType.moveLeft && squareBlock: {
      return {
        width: 2,
        height: 1,
      }
    }
    case actionType === GameCenterActionType.moveUp && verticalBlock:
    case actionType === GameCenterActionType.moveRight && horizontalBlock:
    case actionType === GameCenterActionType.moveDown && verticalBlock:
    case actionType === GameCenterActionType.moveLeft && horizontalBlock: {
      return {
        width: 1,
        height: 1,
      }
    }
    default:
      return size
  }
}
