import { GameLevel } from '../../types/game'

export const LEVEL_6: GameLevel = {
  name: '6',
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
