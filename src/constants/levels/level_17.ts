import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const LEVEL_17: GameLevel = {
  id: 'level-17',
  name: '17',
  type: GameLevelType.regular,
  previousLevelId: 'level-16',
  nextLevelId: 'level-18',
  stageId: 'stage-3',
  size: {
    width: 3,
    height: 4,
  },
  hero: {
    position: {
      x: 2,
      y: 1,
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
        width: 3,
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
