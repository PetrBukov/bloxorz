import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_11: GameLevel = {
  id: 'level-1-11',
  name: '11',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-10',
  nextLevelId: 'level-1-12',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 1,
      y: 3,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  target: {
    x: 0,
    y: 0,
  },
  moves: 8,
  surfaces: [
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 1,
        y: 0,
      },
      size: {
        width: 2,
        height: 6,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 3,
      },
      size: {
        width: 1,
        height: 3,
      },
    },
  ],
}
