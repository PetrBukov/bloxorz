import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_12: GameLevel = {
  id: 'level-12',
  name: '12',
  type: GameLevelType.regular,
  previousLevelId: 'level-11',
  nextLevelId: 'level-13',
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 7,
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
  moves: 12,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 3,
        height: 3,
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
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 6,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
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
