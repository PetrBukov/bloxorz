import { Coordinates, Placement } from '../types/common'
import { getAngles } from './getAngles'

export const getTileCoordinates = (placement: Placement): Array<Coordinates> => {
  const tileCoordinates: Array<Coordinates> = []
  const [angleA, , , angleC] = getAngles(placement)

  for (let rowIndex = angleA.y; rowIndex <= angleC.y; rowIndex++) {
    for (let columnIndex = angleA.x; columnIndex <= angleC.x; columnIndex++) {
      tileCoordinates.push({
        x: columnIndex,
        y: rowIndex,
      })
    }
  }

  return tileCoordinates
}
