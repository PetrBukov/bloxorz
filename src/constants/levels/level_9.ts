import { GameLevel } from '../../types/game'

export const LEVEL_9: GameLevel = {
  name: '9',
  size: {
    width: 5,
    height: 8,
  },
  start: {
    x: 1,
    y: 5,
  },
  target: {
    x: 3,
    y: 6,
  },
  moves: [8, 12],
  surfaces: [
    {
      position: {
        x: 1,
        y: 1,
      },
      size: {
        width: 2,
        height: 5,
      },
    },
    {
      position: {
        x: 3,
        y: 2,
      },
      size: {
        width: 1,
        height: 5,
      },
    },
  ],
}
