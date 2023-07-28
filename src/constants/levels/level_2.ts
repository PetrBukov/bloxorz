import { GameLevel } from '../../types/game'

export const LEVEL_2: GameLevel = {
  id: 'level-1-2',
  name: '2',
  previousLevelId: 'level-1-1',
  nextLevelId: 'level-1-3',
  size: {
    width: 3,
    height: 4,
  },
  start: {
    x: 2,
    y: 3,
  },
  target: {
    x: 0,
    y: 0,
  },
  moves: 4,
  surfaces: [
    {
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
