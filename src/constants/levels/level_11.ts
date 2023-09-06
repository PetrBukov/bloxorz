import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_11: GameLevel = {
  sequenceNumber: 11,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    placement: [
      {
        x: 1,
        y: 3,
      },
      {
        x: 1,
        y: 3,
      },
    ],
  },
  moves: 8,
  surfaces: [
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
          x: 2,
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
          x: 0,
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
