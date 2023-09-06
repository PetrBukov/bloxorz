import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_21: GameLevel = {
  sequenceNumber: 21,
  type: GameLevelType.regular,
  size: {
    width: 5,
    height: 9,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 8,
      },
      {
        x: 0,
        y: 8,
      },
    ],
  },
  moves: 8,
  surfaces: [
    {
      placement: [
        {
          x: 3,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 1,
        },
        {
          x: 1,
          y: 1,
        },
      ],
      tile: {
        type: TileType.surface,
      },
    },
    {
      placement: [
        {
          x: 2,
          y: 1,
        },
        {
          x: 4,
          y: 1,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 2,
        },
        {
          x: 3,
          y: 3,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 4,
        },
        {
          x: 0,
          y: 5,
        },
      ],
      tile: {
        type: TileType.surface,
      },
    },
    {
      placement: [
        {
          x: 1,
          y: 4,
        },
        {
          x: 2,
          y: 5,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 5,
        },
        {
          x: 3,
          y: 7,
        },
      ],
      tile: {
        type: TileType.surface,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 6,
        },
        {
          x: 2,
          y: 8,
        },
      ],
      tile: {
        type: TileType.fragileSurface,
      },
    },
    {
      placement: [
        {
          x: 1,
          y: 6,
        },
        {
          x: 2,
          y: 8,
        },
      ],
      tile: {
        type: TileType.empty,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 8,
        },
        {
          x: 0,
          y: 8,
        },
      ],
      tile: {
        type: TileType.surface,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 1,
        },
        {
          x: 3,
          y: 1,
        },
      ],
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
