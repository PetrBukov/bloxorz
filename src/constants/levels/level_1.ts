import { GameLevel } from '../../types/game'

export const LEVEL_1: GameLevel = {
  name: '1',
  size: {
    width: 1,
    height: 4,
  },
  start: {
    x: 0,
    y: 0,
  },
  target: {
    x: 0,
    y: 3,
  },
  moves: 2,
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
  ],
}
