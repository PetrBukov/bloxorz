import { Coordinates, GameBoardActionType } from '../../../../types'

export type FragileSurfaceTileProps = {
  heroPosition: Coordinates
  tilePosition: Coordinates
  activeActionType?: GameBoardActionType
}
