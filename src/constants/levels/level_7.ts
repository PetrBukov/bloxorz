import { GameLevel } from '../../types/game'

export const LEVEL_7: GameLevel = {
  id: 'level-1-7',
  name: '7',
  previousLevelId: 'level-1-6',
  nextLevelId: 'level-1-8',
  size: {
    width: 3,
    height: 9,
  },
  start: {
    x: 0,
    y: 7,
  },
  target: {
    x: 2,
    y: 1,
  },
  moves: 6,
  surfaces: [
    {
      position: {
        x: 0,
        y: 2,
      },
      size: {
        width: 1,
        height: 7,
      },
    },
    {
      position: {
        x: 1,
        y: 1,
      },
      size: {
        width: 1,
        height: 7,
      },
    },
    {
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 7,
      },
    },
  ],
}
