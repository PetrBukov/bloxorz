import { GameLevel } from '../../types/game'

export const LEVEL_8: GameLevel = {
  id: 'level-1-8',
  name: '8',
  previousLevelId: 'level-1-7',
  nextLevelId: 'level-1-9',
  size: {
    width: 3,
    height: 3,
  },
  start: {
    x: 0,
    y: 2,
  },
  target: {
    x: 2,
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
        width: 3,
        height: 3,
      },
    },
  ],
}
