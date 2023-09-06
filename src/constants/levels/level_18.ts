import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_18: GameLevel = {
  sequenceNumber: 18,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 9,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 1,
      },
      {
        x: 0,
        y: 1,
      },
    ],
  },
  moves: 13,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 2,
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
          x: 0,
          y: 3,
        },
        {
          x: 1,
          y: 6,
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
          y: 6,
        },
        {
          x: 0,
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
