import { Coordinates, Dimensions } from '../types/common'
import { calculateHeroBlockTailPosition } from './calculateHeroBlockTailPosition'
import { checkPositionForOutOfMap } from './checkPositionForOutOfMap'

export const checkForHeroBlockOutOfMap = ({
  heroSize,
  heroPosition,
  gameLevelSize,
}: {
  heroPosition: Coordinates
  heroSize: Dimensions
  gameLevelSize: Dimensions
}): boolean => {
  // 1 - Check if the Head point of Hero Block is out of map
  const isHeroBlockHeadOutOfMap = checkPositionForOutOfMap({
    position: heroPosition,
    gameLevelSize,
  })
  if (isHeroBlockHeadOutOfMap) {
    return true
  }

  // 1 - Check if the tail point of Hero Block is out of map
  const heroBlockTailPosition = calculateHeroBlockTailPosition({
    position: heroPosition,
    size: heroSize,
  })
  const isHeroBlockTailOutOfMap = checkPositionForOutOfMap({
    position: heroBlockTailPosition,
    gameLevelSize,
  })
  if (isHeroBlockTailOutOfMap) {
    return true
  }

  return false
}
