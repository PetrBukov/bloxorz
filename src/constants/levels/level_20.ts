import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_20: GameLevel = {
  sequenceNumber: 20,
  type: GameLevelType.regular,
  size: {
    width: 6,
    height: 4,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 2,
      },
      {
        x: 0,
        y: 2,
      },
    ],
  },
  moves: 12,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 2,
        },
        {
          x: 5,
          y: 2,
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
          y: 0,
        },
        {
          x: 5,
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
          x: 3,
          y: 3,
        },
        {
          x: 3,
          y: 3,
        },
      ],
      tile: {
        type: TileType.surface,
      },
    },
    {
      placement: [
        {
          x: 5,
          y: 0,
        },
        {
          x: 5,
          y: 0,
        },
      ],
      tile: {
        type: TileType.empty,
      },
    },
    {
      placement: [
        {
          x: 2,
          y: 0,
        },
        {
          x: 2,
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
          x: 3,
          y: 3,
        },
        {
          x: 3,
          y: 3,
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
