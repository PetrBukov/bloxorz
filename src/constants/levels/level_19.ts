import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_19: GameLevel = {
  sequenceNumber: 19,
  type: GameLevelType.regular,
  size: {
    width: 6,
    height: 3,
  },
  hero: {
    position: {
      x: 0,
      y: 0,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 9,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 5,
        height: 2,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 1,
        y: 2,
      },
      size: {
        width: 5,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 5,
        y: 2,
      },
      size: {
        width: 1,
        height: 1,
      },
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
