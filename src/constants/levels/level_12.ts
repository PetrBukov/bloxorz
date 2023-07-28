import { GameLevel } from '../../types/game'

export const LEVEL_12: GameLevel = {
  id: 'level-1-12',
  name: '12',
  previousLevelId: 'level-1-11',
  nextLevelId: null,
  size: {
    width: 3,
    height: 7,
  },
  start: {
    x: 0,
    y: 0,
  },
  target: {
    x: 2,
    y: 6,
  },
  moves: 12,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 3,
        height: 3,
      },
    },
    {
      position: {
        x: 0,
        y: 3,
      },
      size: {
        width: 2,
        height: 4,
      },
    },
    {
      position: {
        x: 2,
        y: 6,
      },
      size: {
        width: 1,
        height: 1,
      },
    },
  ],
}
