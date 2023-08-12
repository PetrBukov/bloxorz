import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_14: GameLevel = {
  id: 'level-14',
  name: '14',
  sequenceNumber: 14,
  type: GameLevelType.regular,
  previousLevelId: 'level-13',
  nextLevelId: 'level-15',
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 8,
  },
  hero: {
    position: {
      x: 1,
      y: 1,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 14,
  surfaces: [
    {
      position: {
        x: 0,
        y: 4,
      },
      size: {
        width: 1,
        height: 4,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 1,
        y: 0,
      },
      size: {
        width: 1,
        height: 7,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 4,
      },
      size: {
        width: 1,
        height: 3,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 1,
        y: 0,
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
