import { GameLevel } from '../../types/game'

export const LEVEL_4: GameLevel = {
  id: 'level-1-4',
  name: '4',
  previousLevelId: 'level-1-3',
  nextLevelId: 'level-1-5',
  size: {
    width: 3,
    height: 7,
  },
  start: {
    x: 2,
    y: 0,
  },
  target: {
    x: 2,
    y: 6,
  },
  moves: 7,
  surfaces: [
    {
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
      position: {
        x: 0,
        y: 1,
      },
      size: {
        width: 2,
        height: 3,
      },
    },
    {
      position: {
        x: 2,
        y: 3,
      },
      size: {
        width: 1,
        height: 4,
      },
    },
  ],
}
