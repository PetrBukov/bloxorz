import { GameLevel } from '../../types/game'

export const LEVEL_5: GameLevel = {
  id: 'level-1-5',
  name: '5',
  previousLevelId: 'level-1-4',
  nextLevelId: 'level-1-6',
  size: {
    width: 3,
    height: 5,
  },
  start: {
    x: 0,
    y: 0,
  },
  target: {
    x: 0,
    y: 1,
  },
  moves: 7,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 5,
      },
    },
    {
      position: {
        x: 1,
        y: 3,
      },
      size: {
        width: 2,
        height: 2,
      },
    },
  ],
}
