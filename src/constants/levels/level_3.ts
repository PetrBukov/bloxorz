import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_3: GameLevel = {
  id: 'level-1-3',
  name: '3',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-2',
  nextLevelId: 'level-1-4',
  size: {
    width: 4,
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
    x: 3,
    y: 0,
  },
  moves: 6,
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
    {
      type: TileType.surface,
      position: {
        x: 1,
        y: 3,
      },
      size: {
        width: 2,
        height: 1,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 3,
        y: 0,
      },
      size: {
        width: 1,
        height: 4,
      },
    },
  ],
}
