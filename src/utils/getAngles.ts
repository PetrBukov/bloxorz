import { Coordinates, Placement } from '../types/common'

export const getAngles = (
  placement: Placement,
): [angleA: Coordinates, angleB: Coordinates, angleD: Coordinates, angleC: Coordinates] => {
  const [point1, point2] = placement
  const point3 = { x: point2.x, y: point1.y }
  const point4 = { x: point1.x, y: point2.y }

  const angles: [Coordinates, Coordinates, Coordinates, Coordinates] = [
    point1,
    point2,
    point3,
    point4,
  ]

  angles.sort((a, b) => {
    if (a.y > b.y) {
      return 1
    } else if (a.y < b.y) {
      return -1
    } else if (a.x > b.x) {
      return 1
    } else if (a.x < b.x) {
      return -1
    } else {
      return 0
    }
  })

  return angles
}
