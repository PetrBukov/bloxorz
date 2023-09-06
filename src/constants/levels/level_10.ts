import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_10: GameLevel = {
  sequenceNumber: 10,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 5,
      },
      {
        x: 0,
        y: 5,
      },
    ],
  },
  moves: 10,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 3,
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
          y: 0,
        },
        {
          x: 2,
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
          x: 2,
          y: 0,
        },
        {
          x: 2,
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
