import { DIRECTION } from '../../../constants'
import { Direction, Hero } from '../../../types'
import {
  checkForHorizontalBlock,
  checkForSquareBlock,
  checkForVerticalBlock,
  getSize,
} from '../../../utils'

export const calcHeroStateAfterMoving = ({
  hero,
  movingDirection,
}: {
  hero: Hero
  movingDirection: Direction
}): Hero => {
  const { placement } = hero
  const heroSize = getSize(placement)
  const [point1, point2] = placement
  const isSquareBlock = checkForSquareBlock(heroSize)
  const isHorizontalBlock = checkForHorizontalBlock(heroSize)
  const isVerticalBlock = checkForVerticalBlock(heroSize)

  switch (true) {
    /**
     * Moving up
     */
    case movingDirection === DIRECTION.up && isSquareBlock: {
      return {
        placement: [
          { x: point1.x, y: point1.y - 2 },
          { x: point2.x, y: point2.y - 1 },
        ],
      }
    }
    case movingDirection === DIRECTION.up && isHorizontalBlock: {
      return {
        placement: [
          { x: point1.x, y: point1.y - 1 },
          { x: point2.x, y: point2.y - 1 },
        ],
      }
    }
    case movingDirection === DIRECTION.up && isVerticalBlock: {
      const commonPointY = Math.min(point1.y, point2.y) - 1
      return {
        placement: [
          { x: point1.x, y: commonPointY },
          { x: point2.x, y: commonPointY },
        ],
      }
    }
    /**
     * Moving right
     */
    case movingDirection === DIRECTION.right && isSquareBlock: {
      return {
        placement: [
          { x: point1.x + 2, y: point1.y },
          { x: point2.x + 1, y: point2.y },
        ],
      }
    }
    case movingDirection === DIRECTION.right && isHorizontalBlock: {
      const commonPointX = Math.max(point1.x, point2.x) + 1
      return {
        placement: [
          { x: commonPointX, y: point1.y },
          { x: commonPointX, y: point2.y },
        ],
      }
    }
    case movingDirection === DIRECTION.right && isVerticalBlock: {
      return {
        placement: [
          { x: point1.x + 1, y: point1.y },
          { x: point2.x + 1, y: point2.y },
        ],
      }
    }
    /**
     * Moving down
     */
    case movingDirection === DIRECTION.down && isSquareBlock: {
      return {
        placement: [
          { x: point1.x, y: point1.y + 2 },
          { x: point2.x, y: point2.y + 1 },
        ],
      }
    }
    case movingDirection === DIRECTION.down && isHorizontalBlock: {
      return {
        placement: [
          { x: point1.x, y: point1.y + 1 },
          { x: point2.x, y: point2.y + 1 },
        ],
      }
    }
    case movingDirection === DIRECTION.down && isVerticalBlock: {
      const commonPointY = Math.max(point1.y, point2.y) + 1
      return {
        placement: [
          { x: point1.x, y: commonPointY },
          { x: point2.x, y: commonPointY },
        ],
      }
    }
    /**
     * Moving left
     */
    case movingDirection === DIRECTION.left && isSquareBlock: {
      return {
        placement: [
          { x: point1.x - 2, y: point1.y },
          { x: point2.x - 1, y: point2.y },
        ],
      }
    }
    case movingDirection === DIRECTION.left && isHorizontalBlock: {
      const commonPointX = Math.min(point1.x, point2.x) - 1
      return {
        placement: [
          { x: commonPointX, y: point1.y },
          { x: commonPointX, y: point2.y },
        ],
      }
    }
    case movingDirection === DIRECTION.left && isVerticalBlock: {
      return {
        placement: [
          { x: point1.x - 1, y: point1.y },
          { x: point2.x - 1, y: point2.y },
        ],
      }
    }

    default:
      return hero
  }
}
