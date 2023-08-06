import { DIRECTION } from '../../../constants'
import { Dimensions, Direction } from '../../../types'
import { checkForHorizontalBlock, checkForSquareBlock, checkForVerticalBlock } from '../../../utils'

export const calcHeroSizeAfterMoving = ({
  heroSize,
  movingDirection,
}: {
  heroSize: Dimensions
  movingDirection: Direction
}): Dimensions => {
  const isSquareBlock = checkForSquareBlock(heroSize)
  const isHorizontalBlock = checkForHorizontalBlock(heroSize)
  const isVerticalBlock = checkForVerticalBlock(heroSize)

  switch (true) {
    case movingDirection === DIRECTION.up && isSquareBlock:
    case movingDirection === DIRECTION.right && isVerticalBlock:
    case movingDirection === DIRECTION.down && isSquareBlock:
    case movingDirection === DIRECTION.left && isVerticalBlock: {
      return {
        width: 1,
        height: 2,
      }
    }

    case movingDirection === DIRECTION.up && isHorizontalBlock:
    case movingDirection === DIRECTION.right && isSquareBlock:
    case movingDirection === DIRECTION.down && isHorizontalBlock:
    case movingDirection === DIRECTION.left && isSquareBlock: {
      return {
        width: 2,
        height: 1,
      }
    }

    case movingDirection === DIRECTION.up && isVerticalBlock:
    case movingDirection === DIRECTION.right && isHorizontalBlock:
    case movingDirection === DIRECTION.down && isVerticalBlock:
    case movingDirection === DIRECTION.left && isHorizontalBlock:
    default: {
      return {
        width: 1,
        height: 1,
      }
    }
  }
}
