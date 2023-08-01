import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_1: GameLevel = {
  id: 'level-1-1',
  name: '1',
  type: GameLevelType.regular,
  previousLevelId: null,
  nextLevelId: 'level-1-2',
  size: {
    width: 1,
    height: 4,
  },
  hero: {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  target: {
    x: 0,
    y: 3,
  },
  moves: 2,
  surfaces: [
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 4,
      },
    },
  ],
}
