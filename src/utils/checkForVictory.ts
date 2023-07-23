import { Coordinates, Dimensions } from '../types/common'
import { checkForSquareBlock } from './checkForSquareBlock'

export const checkForVictory = ({
  heroSize,
  heroPosition,
  target,
}: {
  heroSize: Dimensions
  heroPosition: Coordinates
  target: Coordinates
}) => {
  // Only when Hero Block is square a victory is possible
  const isSquareBlock = checkForSquareBlock(heroSize)
  if (!isSquareBlock) {
    return false
  }

  const isHeroBlockInTheTargetTile = heroPosition.x === target.x && heroPosition.y === target.y
  return isHeroBlockInTheTargetTile
}
