import { Dimensions } from './common'
import { TileWIthPosition } from './tile'

export type GameBoard = {
  size: Dimensions
  tiles: Array<TileWIthPosition>
}
