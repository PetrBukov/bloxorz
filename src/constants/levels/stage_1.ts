import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const STAGE_1: GameLevel = {
  sequenceNumber: 1,
  type: GameLevelType.stage,
  size: {
    width: 4,
    height: 5,
  },
  hero: {
    placement: [
      {
        x: 1,
        y: 0,
      },
      {
        x: 2,
        y: 0,
      },
    ],
  },
  moves: 10000,
  tileTexts: [
    {
      text: 'Stage 1',
      placement: [
        {
          x: 1,
          y: 0,
        },
        {
          x: 2,
          y: 0,
        },
      ],
    },
  ],
  surfaces: [
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 3,
          y: 4,
        },
      ],
      tile: {
        type: TileType.surface,
        options: {
          alwaysVisible: true,
        },
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 0,
        },
      ],
      tile: {
        type: TileType.empty,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
      tile: {
        type: TileType.empty,
      },
    },
    {
      placement: [
        {
          x: 1,
          y: 0,
        },
        {
          x: 1,
          y: 0,
        },
      ],
      tile: {
        type: TileType.surface,
        options: {
          wideRight: 2,
          alwaysVisible: true,
        },
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 1,
        },
        {
          x: 0,
          y: 1,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 1,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 2,
        },
        {
          x: 0,
          y: 2,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 2,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 3,
        },
        {
          x: 0,
          y: 3,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 3,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 0,
          y: 4,
        },
        {
          x: 0,
          y: 4,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 4,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 1,
        },
        {
          x: 3,
          y: 1,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 5,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 2,
        },
        {
          x: 3,
          y: 2,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 6,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 3,
        },
        {
          x: 3,
          y: 3,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 7,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 4,
        },
        {
          x: 3,
          y: 4,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherLevel,
          levelSequenceNumber: 8,
        },
        status: TileStatus.blocked,
      },
    },
    {
      placement: [
        {
          x: 3,
          y: 0,
        },
        {
          x: 3,
          y: 0,
        },
      ],
      tile: {
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherStage,
          stageSequenceNumber: 2,
        },
        status: TileStatus.available,
      },
    },
  ],
}
