import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

export const LEVEL_5: GameLevel = {
  id: 'level-5',
  name: '5',
  type: GameLevelType.regular,
  previousLevelId: 'level-4',
  nextLevelId: 'level-6',
  stageId: 'stage-1',
  size: {
    width: 3,
    height: 5,
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
        y: 3,
      },
      size: {
        width: 2,
        height: 2,
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
