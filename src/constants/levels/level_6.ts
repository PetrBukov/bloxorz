import { GameLevel, GameLevelType } from '../../types/gameLevel'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

export const LEVEL_6: GameLevel = {
  id: 'level-6',
  name: '6',
  type: GameLevelType.regular,
  previousLevelId: 'level-5',
  nextLevelId: 'level-7',
  stageId: 'stage-1',
  size: {
    width: 3,
    height: 3,
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
  moves: 4,
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
        y: 2,
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
