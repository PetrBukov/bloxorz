import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const STAGE_2: GameLevel = {
  sequenceNumber: 2,
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
      text: 'Stage 2',
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
          levelSequenceNumber: 9,
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
          levelSequenceNumber: 10,
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
          levelSequenceNumber: 11,
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
          levelSequenceNumber: 12,
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
          levelSequenceNumber: 13,
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
          levelSequenceNumber: 14,
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
          levelSequenceNumber: 15,
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
          levelSequenceNumber: 16,
        },
        status: TileStatus.blocked,
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
        type: TileType.gameAction,
        action: {
          type: GameBoardActionType.moveToAnotherStage,
          stageSequenceNumber: 1,
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
          stageSequenceNumber: 3,
        },
        status: TileStatus.blocked,
      },
    },
  ],
}
