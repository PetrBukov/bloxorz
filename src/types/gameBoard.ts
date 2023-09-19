import { Dimensions } from './common'
import { TileWIthPosition } from './tile'

export type GameBoardRow = Array<TileWIthPosition>

export type GameBoard = {
  size: Dimensions
  tiles: Array<GameBoardRow>
}
