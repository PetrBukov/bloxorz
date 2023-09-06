import { GAP_BETWEEN_TILES, HERO_WIDTH, TILE_WIDTH } from '../../constants'
import { Dimensions, ElementPosition, ElementSize, Hero } from '../../types'
import { getAngles, getSize } from '../../utils'

export const calculateBoardSizesPx = (dimensions: Dimensions): ElementSize => {
  const { width, height } = dimensions

  return {
    width: `${width * TILE_WIDTH + (width - 1) * GAP_BETWEEN_TILES}px`,
    height: `${height * TILE_WIDTH + (height - 1) * GAP_BETWEEN_TILES}px`,
  }
}

export const calculateBoardPosition = ({ placement }: Hero): ElementPosition => {
  const [angleA] = getAngles(placement)
  const { height, width } = getSize(placement)

  const top =
    angleA.y * TILE_WIDTH +
    angleA.y * GAP_BETWEEN_TILES +
    TILE_WIDTH / 2 +
    ((height - 1) * (HERO_WIDTH + GAP_BETWEEN_TILES + TILE_WIDTH - HERO_WIDTH)) / 2

  const left =
    angleA.x * TILE_WIDTH +
    angleA.x * GAP_BETWEEN_TILES +
    TILE_WIDTH / 2 +
    ((width - 1) * (HERO_WIDTH + GAP_BETWEEN_TILES + TILE_WIDTH - HERO_WIDTH)) / 2

  return {
    top: `${-top}px`,
    left: `${-left}px`,
  }
}
