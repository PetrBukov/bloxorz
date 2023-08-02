import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileType } from '../../types/tile'

export const LEVEL_8: GameLevel = {
  id: 'level-1-8',
  name: '8',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-7',
  nextLevelId: 'level-1-9',
  size: {
    width: 3,
    height: 3,
  },
  hero: {
    position: {
      x: 0,
      y: 2,
    },
    size: {
      width: 1,
      height: 1,
    },
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
