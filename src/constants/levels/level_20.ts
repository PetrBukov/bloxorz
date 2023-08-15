import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_20: GameLevel = {
  sequenceNumber: 20,
  type: GameLevelType.regular,
  size: {
    width: 6,
    height: 4,
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
  moves: 12,
  surfaces: [
    {
      position: {
        x: 0,
        y: 2,
      },
      size: {
        width: 6,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 3,
        y: 0,
      },
      size: {
        width: 3,
        height: 2,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 3,
        y: 3,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 5,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.empty,
      },
    },
    {
      position: {
        x: 2,
        y: 0,
      },
      size: {
        width: 1,
        height: 2,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 3,
        y: 3,
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
