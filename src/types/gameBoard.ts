import { Dimensions } from './common'
import { Tile } from './tile'

export type GameBoard = {
  size: Dimensions
  // Despite, game board is often a rectangle with rows and columns
  // we store all the tiles in the flat list but not as a list of lists
  // because it's much easier to work with a flat structure.
  tiles: Array<Tile>
}
