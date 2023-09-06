import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_1: GameLevel = {
  sequenceNumber: 1,
  type: GameLevelType.regular,
  size: {
    width: 4,
    height: 1,
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
  moves: 10000,
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
          x: 3,
          y: 0,
        },
        {
          x: 3,
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
