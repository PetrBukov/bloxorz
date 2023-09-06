import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_2: GameLevel = {
  sequenceNumber: 2,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 4,
  },
  hero: {
    placement: [
      {
        x: 2,
        y: 3,
      },
      {
        x: 2,
        y: 3,
      },
    ],
  },
  moves: 4,
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
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
          x: 1,
          y: 1,
        },
        {
          x: 1,
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
          x: 2,
          y: 1,
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
