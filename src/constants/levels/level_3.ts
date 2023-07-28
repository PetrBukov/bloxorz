import { GameLevel } from '../../types/game'

export const LEVEL_3: GameLevel = {
  id: 'level-1-3',
  name: '3',
  previousLevelId: 'level-1-2',
  nextLevelId: 'level-1-4',
  size: {
    width: 4,
    height: 4,
  },
  start: {
    x: 0,
    y: 0,
  },
  target: {
    x: 3,
    y: 0,
  },
  moves: 6,
  surfaces: [
    {
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
