import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

export const LEVEL_2: GameLevel = {
  id: 'level-2',
  name: '2',
  type: GameLevelType.regular,
  previousLevelId: 'level-1',
  nextLevelId: 'level-3',
  stageId: 'stage-1',
  size: {
    width: 3,
    height: 4,
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
  moves: 4,
  surfaces: [
    {
      position: {
        x: 0,
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
        x: 1,
        y: 1,
      },
      size: {
        width: 1,
        height: 2,
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
