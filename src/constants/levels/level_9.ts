import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_9: GameLevel = {
  id: 'level-1-9',
  name: '9',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-8',
  nextLevelId: 'level-1-10',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 0,
      y: 4,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  target: {
    x: 2,
    y: 5,
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
        width: 2,
        height: 5,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 2,
        y: 1,
      },
      size: {
        width: 1,
        height: 5,
      },
    },
  ],
}
