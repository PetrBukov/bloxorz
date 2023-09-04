import { Coordinates } from '../types'

export const checkIfCoordinatesEqual = (
  coordinatesA: Coordinates,
  coordinatesB: Coordinates,
): boolean => {
  return coordinatesA.x === coordinatesB.x && coordinatesA.y === coordinatesB.y
}
