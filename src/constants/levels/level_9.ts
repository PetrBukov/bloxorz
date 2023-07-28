import { GameLevel } from '../../types/game'

export const LEVEL_9: GameLevel = {
  name: '9',
  size: {
    width: 3,
    height: 6,
  },
  start: {
    x: 0,
    y: 4,
  },
  target: {
    x: 2,
    y: 5,
  },
  moves: 8,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 2,
        height: 5,
      },
    },
    {
      position: {
        x: 2,
        y: 1,
      },
      size: {
        width: 1,
        height: 5,
      },
    },
  ],
}
