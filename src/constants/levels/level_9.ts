import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_9: GameLevel = {
  sequenceNumber: 9,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 4,
      },
      {
        x: 0,
        y: 4,
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
          x: 2,
          y: 4,
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
          x: 2,
          y: 5,
        },
        {
          x: 2,
          y: 5,
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
