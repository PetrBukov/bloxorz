import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_18: GameLevel = {
  sequenceNumber: 18,
  type: GameLevelType.regular,
  size: {
    width: 3,
    height: 9,
  },
  hero: {
    position: {
      x: 0,
      y: 1,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 13,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 3,
        height: 9,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 0,
        y: 3,
      },
      size: {
        width: 2,
        height: 4,
      },
      tile: {
        type: TileType.empty,
      },
    },
    {
      position: {
        x: 0,
        y: 6,
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
