import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_8: GameLevel = {
  sequenceNumber: 8,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 3,
  },
  hero: {
    placement: [
      {
        x: 0,
        y: 2,
      },
      {
        x: 0,
        y: 2,
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
