import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileType } from '../../types/tile'

export const LEVEL_4: GameLevel = {
  id: 'level-1-4',
  name: '4',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-3',
  nextLevelId: 'level-1-5',
  size: {
    width: 3,
    height: 7,
  },
  hero: {
    position: {
      x: 2,
      y: 0,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 7,
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
        y: 1,
      },
      size: {
        width: 2,
        height: 3,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 3,
      },
      size: {
        width: 1,
        height: 4,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 6,
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
