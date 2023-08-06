import { Coordinates, DIRECTION, Direction } from '../../../types/common'
import { Hero } from '../../../types/hero'
import { checkForSquareBlock, checkForHorizontalBlock, checkForVerticalBlock } from '../../../utils'

export const calcHeroPositionAfterMoving = ({
  hero: { size, position },
  movingDirection,
}: {
  hero: Hero
  movingDirection: Direction
}): Coordinates => {
  const isSquareBlock = checkForSquareBlock(size)
  const isHorizontalBlock = checkForHorizontalBlock(size)
  const isVerticalBlock = checkForVerticalBlock(size)

  switch (true) {
    case movingDirection === DIRECTION.up && isVerticalBlock:
    case movingDirection === DIRECTION.up && isHorizontalBlock: {
      return {
        ...position,
        y: position.y - 1,
      }
    }
    case movingDirection === DIRECTION.up && isSquareBlock: {
      return {
        ...position,
        y: position.y - 2,
      }
    }

    case movingDirection === DIRECTION.right && isVerticalBlock:
    case movingDirection === DIRECTION.right && isSquareBlock: {
      return {
        ...position,
        x: position.x + 1,
      }
    }
    case movingDirection === DIRECTION.right && isHorizontalBlock: {
      return {
        ...position,
        x: position.x + 2,
      }
    }

    case movingDirection === DIRECTION.down && isSquareBlock:
    case movingDirection === DIRECTION.down && isHorizontalBlock: {
      return {
        ...position,
        y: position.y + 1,
      }
    }
    case movingDirection === DIRECTION.down && isVerticalBlock: {
      return {
        ...position,
        y: position.y + 2,
      }
    }

    case movingDirection === DIRECTION.left && isHorizontalBlock:
    case movingDirection === DIRECTION.left && isVerticalBlock: {
      return {
        ...position,
        x: position.x - 1,
      }
    }
    case movingDirection === DIRECTION.left && isSquareBlock: {
      return {
        ...position,
        x: position.x - 2,
      }
    }

    default:
      return position
  }
}
