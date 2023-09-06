import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_14: GameLevel = {
  sequenceNumber: 14,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 8,
  },
  hero: {
    placement: [
      {
        x: 1,
        y: 1,
      },
      {
        x: 1,
        y: 1,
      },
    ],
  },
  moves: 14,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 4,
        },
        {
          x: 0,
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
          x: 1,
          y: 0,
        },
        {
          x: 1,
          y: 6,
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
          y: 4,
        },
        {
          x: 2,
          y: 6,
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
          y: 0,
        },
        {
          x: 1,
          y: 0,
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
