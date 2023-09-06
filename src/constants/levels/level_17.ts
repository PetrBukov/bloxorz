import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_17: GameLevel = {
  sequenceNumber: 17,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 4,
  },
  hero: {
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
  },
  moves: 6,
  surfaces: [
    {
      placement: [
        {
          x: 0,
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
          x: 1,
          y: 3,
        },
        {
          x: 1,
          y: 3,
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
