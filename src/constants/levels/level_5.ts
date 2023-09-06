import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_5: GameLevel = {
  sequenceNumber: 5,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 5,
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
  moves: 7,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
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
          x: 1,
          y: 3,
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
          x: 0,
          y: 1,
        },
        {
          x: 0,
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
