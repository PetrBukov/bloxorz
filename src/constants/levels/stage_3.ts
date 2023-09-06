import { GameLevel, GameLevelType, GameBoardActionType, TileStatus, TileType } from '../../types'

export const STAGE_3: GameLevel = {
  sequenceNumber: 3,
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
      text: 'Stage 3',
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
    {
      text: 'New levels upcoming...',
      placement: [
        {
          x: 0,
          y: 4,
        },
        {
          x: 3,
          y: 4,
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
          y: 4,
        },
        {
          x: 2,
          y: 4,
        },
      ],
      tile: {
        type: TileType.surface,
        options: {
          wideRight: 4,
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
          levelSequenceNumber: 17,
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
          levelSequenceNumber: 18,
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
          levelSequenceNumber: 19,
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
          levelSequenceNumber: 20,
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
          stageSequenceNumber: 2,
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
          levelSequenceNumber: 21,
        },
        status: TileStatus.blocked,
      },
    },
  ],
}
