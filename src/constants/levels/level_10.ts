import { GameLevel } from '../../types/game'

export const LEVEL_10: GameLevel = {
  name: '10',
  size: {
    width: 3,
    height: 6,
  },
  start: {
    x: 0,
    y: 5,
  },
  target: {
    x: 2,
    y: 0,
  },
  moves: 10,
  surfaces: [
    {
      position: {
        x: 0,
        y: 3,
      },
      size: {
        width: 3,
        height: 3,
      },
    },
    {
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 3,
      },
    },
  ],
}
