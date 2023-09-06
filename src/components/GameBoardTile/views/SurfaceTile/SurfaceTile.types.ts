import { Coordinates, TileSurfaceOptions } from '../../../../types'
import { Placement } from '../../../../types/common'

export type SurfaceTileProps = {
  heroPlacement: Placement
  tilePosition: Coordinates
  tileOptions?: TileSurfaceOptions
}
