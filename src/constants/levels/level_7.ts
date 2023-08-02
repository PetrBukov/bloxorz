import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileType } from '../../types/tile'

export const LEVEL_7: GameLevel = {
  id: 'level-1-7',
  name: '7',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-6',
  nextLevelId: 'level-1-8',
  size: {
    width: 3,
    height: 9,
  },
  hero: {
    position: {
      x: 0,
      y: 7,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 6,
  surfaces: [
    {
      position: {
        x: 0,
        y: 2,
      },
      size: {
        width: 1,
        height: 7,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 1,
        y: 1,
      },
      size: {
        width: 1,
        height: 7,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 7,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 1,
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
