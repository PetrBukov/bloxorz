import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_10: GameLevel = {
  id: 'level-10',
  name: '10',
  type: GameLevelType.regular,
  previousLevelId: 'level-9',
  nextLevelId: 'level-11',
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 0,
      y: 5,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 10,
  surfaces: [
    {
      position: {
        x: 0,
        y: 3,
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
        x: 2,
        y: 0,
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
        x: 2,
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
