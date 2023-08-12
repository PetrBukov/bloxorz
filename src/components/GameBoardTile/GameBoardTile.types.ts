import { Hero, LevelID } from '../../types'
import { TileWIthPosition } from '../../types/tile'

export type GameBoardTileProps = {
  tile: TileWIthPosition
  moves: number
  levelId: LevelID
  hero: Hero
}
