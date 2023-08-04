import { GameLevel, GameLevelType } from '../../types/game'
import { GameBoardActionType, TileStatus, TileType } from '../../types/tile'

import { LEVEL_1 } from './level_1'
import { LEVEL_2 } from './level_2'
import { LEVEL_3 } from './level_3'
import { LEVEL_4 } from './level_4'
import { LEVEL_5 } from './level_5'
import { LEVEL_6 } from './level_6'
import { LEVEL_7 } from './level_7'
import { LEVEL_8 } from './level_8'

export const STAGE_1: GameLevel = {
  id: 'stage-1',
  name: '1',
  type: GameLevelType.stage,
  previousLevelId: null,
  nextLevelId: 'stage-2',
  stageLevels: [
    LEVEL_1.id,
    LEVEL_2.id,
    LEVEL_3.id,
    LEVEL_4.id,
    LEVEL_5.id,
    LEVEL_6.id,
    LEVEL_7.id,
    LEVEL_8.id,
  ],
  stageId: null,
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
      text: 'Stage 1',
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
          levelId: LEVEL_1.id,
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
          levelId: LEVEL_2.id,
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
          levelId: LEVEL_3.id,
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
          levelId: LEVEL_4.id,
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
          levelId: LEVEL_5.id,
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
          levelId: LEVEL_6.id,
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
          levelId: LEVEL_7.id,
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
          levelId: LEVEL_8.id,
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
          stageId: 'stage-2',
        },
        status: TileStatus.available,
      },
    },
  ],
}
