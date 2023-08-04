import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

export const LEVEL_1: GameLevel = {
  id: 'level-1',
  name: '1',
  type: GameLevelType.regular,
  previousLevelId: null,
  nextLevelId: 'level-2',
  stageId: 'stage-1',
  size: {
    width: 1,
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
  moves: 2,
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
        x: 0,
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
