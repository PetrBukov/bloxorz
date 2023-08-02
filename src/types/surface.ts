import { Coordinates, Dimensions } from './common'
import { Tile } from './tile'

export type Surface = {
  position: Coordinates
  size: Dimensions
  tile: Tile
}
