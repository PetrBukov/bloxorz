import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_16: GameLevel = {
  id: 'level-16',
  name: '8',
  type: GameLevelType.regular,
  previousLevelId: 'level-15',
  nextLevelId: null,
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 8,
  },
  hero: {
    position: {
      x: 2,
      y: 7,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 11,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 6,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 1,
        y: 3,
      },
      size: {
        width: 1,
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
        height: 5,
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
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.levelCompleted,
        },
        status: TileStatus.available,
      },
    },
  ],
}
