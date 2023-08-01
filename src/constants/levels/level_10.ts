import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_10: GameLevel = {
  id: 'level-1-10',
  name: '10',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-9',
  nextLevelId: 'level-1-11',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 0,
      y: 5,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  target: {
    x: 2,
    y: 0,
  },
  moves: 10,
  surfaces: [
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 3,
      },
      size: {
        width: 3,
        height: 3,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 3,
      },
    },
  ],
}
