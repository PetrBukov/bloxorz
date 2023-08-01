import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const LEVEL_2: GameLevel = {
  id: 'level-1-2',
  name: '2',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-1',
  nextLevelId: 'level-1-3',
  size: {
    width: 3,
    height: 4,
  },
  hero: {
    position: {
      x: 2,
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
  moves: 4,
  surfaces: [
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 3,
      },
    },
    {
      type: TileType.surface,
      position: {
        x: 1,
        y: 1,
      },
      size: {
        width: 1,
        height: 2,
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
        height: 3,
      },
    },
  ],
}
