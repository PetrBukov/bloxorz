import { GameStatus, LevelID } from '../../types/game'
import { Tile } from '../../types/tile'

export type GameBoardTileProps = {
  tile: Tile
  moves: number
  levelId: LevelID
}
