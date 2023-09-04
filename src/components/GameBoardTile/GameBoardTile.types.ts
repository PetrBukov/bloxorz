import { Hero } from '../../types'
import { GameBoardActionType, TileWIthPosition } from '../../types/tile'

export type GameBoardTileProps = {
  tile: TileWIthPosition
  moves: number
  levelSequenceNumber: number
  hero: Hero
  activeActionType?: GameBoardActionType
}
