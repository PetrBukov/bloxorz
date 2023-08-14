import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const STAGE_2: GameLevel = {
  sequenceNumber: 2,
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
          levelSequenceNumber: 9,
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
          levelSequenceNumber: 10,
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
          levelSequenceNumber: 11,
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
          levelSequenceNumber: 12,
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
          levelSequenceNumber: 13,
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
          levelSequenceNumber: 14,
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
          levelSequenceNumber: 15,
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
          levelSequenceNumber: 16,
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
          stageSequenceNumber: 1,
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
          stageSequenceNumber: 3,
        },
        status: TileStatus.blocked,
      },
    },
  ],
}
