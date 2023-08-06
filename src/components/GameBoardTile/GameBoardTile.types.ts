import { LevelID } from '../../types/gameLevel'
import { Tile } from '../../types/tile'

export type GameBoardTileProps = {
  tile: Tile
  moves: number
  levelId: LevelID
}
