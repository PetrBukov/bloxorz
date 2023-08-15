import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const STAGE_3: GameLevel = {
  sequenceNumber: 3,
  type: GameLevelType.stage,
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
      text: 'Stage 3',
      position: {
        x: 1,
        y: 0,
      },
      size: {
        width: 2,
        height: 1,
      },
    },
    {
      text: 'New levels upcoming...',
      position: {
        x: 0,
        y: 4,
      },
      size: {
        width: 4,
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
        options: {
          alwaysVisible: true,
        },
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
          wideRight: 2,
          alwaysVisible: true,
        },
      },
    },
    {
      position: {
        x: 0,
        y: 4,
      },
      size: {
        width: 3,
        height: 1,
      },
      tile: {
        type: TileType.surface,
        options: {
          wideRight: 4,
          alwaysVisible: true,
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
          levelSequenceNumber: 17,
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
          levelSequenceNumber: 18,
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
          levelSequenceNumber: 19,
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
          levelSequenceNumber: 20,
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
          stageSequenceNumber: 2,
        },
        status: TileStatus.blocked,
      },
    },
  ],
}
