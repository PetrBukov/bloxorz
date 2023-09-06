import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_7: GameLevel = {
  sequenceNumber: 7,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 9,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 7,
      },
      {
        x: 0,
        y: 7,
      },
    ],
  },
  moves: 6,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 2,
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
          x: 1,
          y: 1,
        },
        {
          x: 1,
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
          x: 2,
          y: 0,
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
          y: 1,
        },
        {
          x: 2,
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
