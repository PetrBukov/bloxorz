import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_12: GameLevel = {
  sequenceNumber: 12,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 7,
  },
  hero: {
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
  },
  moves: 12,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 2,
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
          x: 0,
          y: 3,
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
          y: 6,
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
          x: 2,
          y: 6,
        },
        {
          x: 2,
          y: 6,
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
