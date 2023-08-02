import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileType } from '../../types/tile'

export const TUTORIAL_1: GameLevel = {
  id: 'tutorial-1',
  name: 'Welcome',
  type: GameLevelType.tutorial,
  previousLevelId: null,
  nextLevelId: null,
  size: {
    width: 3,
    height: 1,
  },
  hero: {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 2,
      height: 1,
    },
  },
  moves: 10000,
  tileTexts: [
    {
      text: 'Start',
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 2,
        height: 1,
      },
    },
  ],
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 3,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.surface,
        options: {
          wideRight: true,
        },
      },
    },
    {
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.levelCompleted,
        },
      },
    },
  ],
}
