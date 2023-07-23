import { Coordinates, Dimensions } from '../types/common'

export const checkPositionForOutOfMap = ({
  position,
  gameLevelSize,
}: {
  position: Coordinates
  gameLevelSize: Dimensions
}) => {
  if (position.x < 0 || position.y < 0) {
    return true
  }

  if (position.x >= gameLevelSize.width || position.y >= gameLevelSize.height) {
    return true
  }

  return false
}
