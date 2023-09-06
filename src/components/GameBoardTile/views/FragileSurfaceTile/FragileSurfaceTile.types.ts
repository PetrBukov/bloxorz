import { Coordinates, GameBoardActionType } from '../../../../types'
import { Placement } from '../../../../types/common'

export type FragileSurfaceTileProps = {
  heroPlacement: Placement
  tilePosition: Coordinates
  activeActionType?: GameBoardActionType
}
