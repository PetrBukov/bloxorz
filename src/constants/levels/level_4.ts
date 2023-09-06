import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_4: GameLevel = {
  sequenceNumber: 4,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 7,
  },
  hero: {
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
          x: 2,
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
          x: 0,
          y: 1,
        },
        {
          x: 1,
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
          y: 3,
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
