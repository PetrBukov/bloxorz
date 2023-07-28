import { GameLevel } from '../../types/game'

export const LEVEL_6: GameLevel = {
  id: 'level-1-6',
  name: '6',
  previousLevelId: 'level-1-5',
  nextLevelId: 'level-1-7',
  size: {
    width: 3,
    height: 3,
  },
  start: {
    x: 0,
    y: 0,
  },
  target: {
    x: 0,
    y: 2,
  },
  moves: 4,
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
  ],
}
