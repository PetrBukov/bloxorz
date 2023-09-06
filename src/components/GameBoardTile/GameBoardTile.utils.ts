import { GAP_BETWEEN_TILES, LIGHT_SPOT_SIZE, TILE_WIDTH } from '../../constants'
import { Coordinates, ElementPosition } from '../../types'
import { Placement } from '../../types/common'
import { getAngles } from '../../utils'

export const calcLightSpotPosition = (
  heroPlacement: Placement,
  tilePosition: Coordinates,
): ElementPosition => {
  const [angleA] = getAngles(heroPlacement)
  // 1 - Position Light Spot to the center of the tile
  let tileTop = TILE_WIDTH / 2 - LIGHT_SPOT_SIZE / 2
  let tileLeft = TILE_WIDTH / 2 - LIGHT_SPOT_SIZE / 2

  // 2 - Calculate difference in position between tile and the Hero Block
  const diffY = tilePosition.y - angleA.y
  const diffX = tilePosition.x - angleA.x

  // 3 - Move light spot to the Hero Block
  tileTop = tileTop - diffY * TILE_WIDTH - diffY * GAP_BETWEEN_TILES
  tileLeft = tileLeft - diffX * TILE_WIDTH - diffX * GAP_BETWEEN_TILES

  return {
    top: `${tileTop}px`,
    left: `${tileLeft}px`,
  }
}
