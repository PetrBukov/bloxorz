import { GameLevel } from '../../types/game'

export const LEVEL_5: GameLevel = {
  name: '5',
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
