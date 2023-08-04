import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

import { LEVEL_10 } from './level_10'
import { LEVEL_11 } from './level_11'
import { LEVEL_12 } from './level_12'
import { LEVEL_13 } from './level_13'
import { LEVEL_14 } from './level_14'
import { LEVEL_15 } from './level_15'
import { LEVEL_16 } from './level_16'
import { LEVEL_9 } from './level_9'

export const STAGE_2: GameLevel = {
  id: 'stage-2',
  name: '2',
  type: GameLevelType.stage,
  previousLevelId: 'stage-1',
  nextLevelId: 'stage-3',
  stageId: null,
  stageLevels: [
    LEVEL_9.id,
    LEVEL_10.id,
    LEVEL_11.id,
    LEVEL_12.id,
    LEVEL_13.id,
    LEVEL_14.id,
    LEVEL_15.id,
    LEVEL_16.id,
  ],
  size: {
    width: 4,
    height: 5,
  },
  hero: {
    position: {
      x: 1,
      y: 0,
    },
    size: {
      width: 2,
      height: 1,
    },
  },
  moves: 10000,
  tileTexts: [
    {
      text: 'Stage 2',
      position: {
        x: 1,
        y: 0,
      },
      size: {
        width: 2,
        height: 1,
      },
    },
  ],
  surfaces: [
    {
      position: {
        x: 0,
        y: 0,
      },
      size: {
        width: 4,
        height: 5,
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
        type: TileType.empty,
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
        type: TileType.empty,
      },
    },
    {
      position: {
        x: 1,
        y: 0,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.surface,
        options: {
          wideRight: true,
        },
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
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_9.id,
        },
        status: TileStatus.blocked,
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
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_10.id,
        },
        status: TileStatus.blocked,
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
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_11.id,
        },
        status: TileStatus.blocked,
      },
    },
    {
      position: {
        x: 0,
        y: 4,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_12.id,
        },
        status: TileStatus.blocked,
      },
    },
    {
      position: {
        x: 3,
        y: 1,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_13.id,
        },
        status: TileStatus.blocked,
      },
    },
    {
      position: {
        x: 3,
        y: 2,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_14.id,
        },
        status: TileStatus.blocked,
      },
    },
    {
      position: {
        x: 3,
        y: 3,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_15.id,
        },
        status: TileStatus.blocked,
      },
    },
    {
      position: {
        x: 3,
        y: 4,
      },
      size: {
        width: 1,
        height: 1,
      },
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelId: LEVEL_16.id,
        },
        status: TileStatus.blocked,
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
          type: GameBoardActionType.moveToAnotherStage,
          stageId: 'stage-1',
        },
        status: TileStatus.blocked,
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
          type: GameBoardActionType.moveToAnotherStage,
          stageId: 'stage-3',
        },
        status: TileStatus.blocked,
      },
    },
  ],
}
