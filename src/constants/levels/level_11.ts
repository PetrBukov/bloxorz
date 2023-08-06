import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_11: GameLevel = {
  id: 'level-11',
  name: '3',
  type: GameLevelType.regular,
  previousLevelId: 'level-10',
  nextLevelId: 'level-12',
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 1,
      y: 3,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 8,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
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
        x: 1,
        y: 0,
      },
      size: {
        width: 2,
        height: 6,
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
        width: 1,
        height: 3,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 0,
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
