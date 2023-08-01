import { GameLevel, GameLevelType } from '../../types/game'
import { TileType } from '../../types/tile'

export const TUTORIAL_1: GameLevel = {
  id: 'tutorial-1',
  name: 'Welcome',
  type: GameLevelType.tutorial,
  previousLevelId: null,
  nextLevelId: null,
  size: {
    width: 3,
    height: 1,
  },
  hero: {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 2,
      height: 1,
    },
  },
  target: {
    x: 2,
    y: 0,
  },
  moves: 10000,
  tileTexts: [
    {
      text: 'Start',
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 2,
        height: 1,
      },
    },
  ],
  surfaces: [
    {
      type: TileType.surface,
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 3,
        height: 1,
      },
    },
    {
      type: TileType.surfaceWideRight,
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
    },
  ],
}
