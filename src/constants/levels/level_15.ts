import { GameLevel, GameLevelType } from '../../types/gameLevel'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

export const LEVEL_15: GameLevel = {
  id: 'level-15',
  name: '7',
  type: GameLevelType.regular,
  previousLevelId: 'level-14',
  nextLevelId: 'level-16',
  stageId: 'stage-2',
  size: {
    width: 3,
    height: 6,
  },
  hero: {
    position: {
      x: 2,
      y: 3,
    },
    size: {
      width: 1,
      height: 1,
    },
  },
  moves: 7,
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 1,
        height: 5,
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
        height: 6,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 2,
        y: 1,
      },
      size: {
        width: 1,
        height: 5,
      },
      tile: {
        type: TileType.surface,
      },
    },
    {
      position: {
        x: 0,
        y: 1,
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
