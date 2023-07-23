import { Coordinates, Dimensions } from '../types/common'
import { checkForHorizontalBlock } from './checkForHorizontalBlock'
import { checkForVerticalBlock } from './checkForVerticalBlock'

export const calculateHeroBlockTailPosition = ({
  size,
  position,
}: {
  size: Dimensions
  position: Coordinates
}): Coordinates => {
  const isHorizontalBlock = checkForHorizontalBlock(size)
  if (isHorizontalBlock) {
    return {
      ...position,
      x: position.x + 1,
    }
  }

  const isVerticalBlock = checkForVerticalBlock(size)
  if (isVerticalBlock) {
    return {
      ...position,
      y: position.y + 1,
    }
  }

  return position
}
