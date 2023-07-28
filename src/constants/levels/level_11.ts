import { GameLevel } from '../../types/game'

export const LEVEL_11: GameLevel = {
  id: 'level-1-11',
  name: '11',
  previousLevelId: 'level-1-10',
  nextLevelId: 'level-1-12',
  size: {
    width: 3,
    height: 6,
  },
  start: {
    x: 1,
    y: 3,
  },
  target: {
    x: 0,
    y: 0,
  },
  moves: 8,
  surfaces: [
    {
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
