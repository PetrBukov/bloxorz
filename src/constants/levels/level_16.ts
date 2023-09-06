import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_16: GameLevel = {
  sequenceNumber: 16,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 8,
  },
  hero: {
    placement: [
      {
        x: 2,
        y: 7,
      },
      {
        x: 2,
        y: 7,
      },
    ],
  },
  moves: 11,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
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
          y: 3,
        },
        {
          x: 1,
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
          x: 2,
          y: 3,
        },
        {
          x: 2,
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
          y: 0,
        },
        {
          x: 0,
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
