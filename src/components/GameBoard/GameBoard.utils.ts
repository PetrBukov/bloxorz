import { GAP_BETWEEN_TILES, HERO_WIDTH, TILE_WIDTH } from '../../constants'
import { Dimensions, ElementPosition, ElementSize, Hero } from '../../types'

export const calculateBoardSizesPx = (dimensions: Dimensions): ElementSize => {
  const { width, height } = dimensions

  return {
    width: `${width * TILE_WIDTH + (width - 1) * GAP_BETWEEN_TILES}px`,
    height: `${height * TILE_WIDTH + (height - 1) * GAP_BETWEEN_TILES}px`,
  }
}

export const calculateBoardPosition = ({ position, size }: Hero): ElementPosition => {
  const topDiff =
    position.y * TILE_WIDTH +
    position.y * GAP_BETWEEN_TILES +
    TILE_WIDTH / 2 +
    ((size.height - 1) * (HERO_WIDTH + GAP_BETWEEN_TILES + TILE_WIDTH - HERO_WIDTH)) / 2

  const leftDiff =
    position.x * TILE_WIDTH +
    position.x * GAP_BETWEEN_TILES +
    TILE_WIDTH / 2 +
    ((size.width - 1) * (HERO_WIDTH + GAP_BETWEEN_TILES + TILE_WIDTH - HERO_WIDTH)) / 2

  return {
    top: `calc(50% - ${topDiff}px)`,
    left: `calc(50% - ${leftDiff}px)`,
  }
}
