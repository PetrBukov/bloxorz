import { Coordinates, Dimensions } from './common'
import { TileType } from './tile'

export type Surface = {
  type: TileType
  position: Coordinates
  size: Dimensions
}
