import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileType } from '../../types/tile'

export const LEVEL_6: GameLevel = {
  id: 'level-1-6',
  name: '6',
  type: GameLevelType.regular,
  previousLevelId: 'level-1-5',
  nextLevelId: 'level-1-7',
  size: {
    width: 3,
    height: 3,
  },
  hero: {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 1,
      height: 1,
    },
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
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 0,
        y: 2,
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
