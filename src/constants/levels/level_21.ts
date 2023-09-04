import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_21: GameLevel = {
  sequenceNumber: 21,
  type: GameLevelType.regular,
  size: {
    width: 5,
    height: 9,
  },
  hero: {
    position: {
      x: 0,
      y: 8,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 99,
  surfaces: [
    {
      position: {
        x: 3,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 3,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 0,
        y: 1,
      },
      size: {
        width: 2,
        height: 1,
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
        width: 3,
        height: 1,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 0,
        y: 2,
      },
      size: {
        width: 4,
        height: 2,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 0,
        y: 4,
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
        x: 1,
        y: 4,
      },
      size: {
        width: 2,
        height: 2,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 3,
        y: 5,
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
        x: 0,
        y: 6,
      },
      size: {
        width: 3,
        height: 3,
      },
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      position: {
        x: 1,
        y: 6,
      },
      size: {
        width: 2,
        height: 2,
      },
      tile: {
        type: TileType.empty,
      },
    },
    {
      position: {
        x: 0,
        y: 8,
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
        x: 3,
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
        status: TileStatus.available,
      },
    },
  ],
}
