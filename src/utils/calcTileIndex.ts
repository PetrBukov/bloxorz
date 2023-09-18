import { Coordinates, Dimensions } from '../types'

export const calcTileIndex = ({
  coordinates,
  gameBoardSize,
}: {
  coordinates: Coordinates
  gameBoardSize: Dimensions
}): number => {
  return gameBoardSize.width * coordinates.y + coordinates.x
}
