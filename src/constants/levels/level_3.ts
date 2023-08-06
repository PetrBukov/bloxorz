import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_3: GameLevel = {
  id: 'level-3',
  name: '3',
  type: GameLevelType.regular,
  previousLevelId: 'level-2',
  nextLevelId: 'level-4',
  stageId: 'stage-1',
  size: {
    width: 4,
    height: 4,
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
  moves: 6,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
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
        y: 3,
      },
      size: {
        width: 2,
        height: 1,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 3,
        y: 0,
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
        x: 3,
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
