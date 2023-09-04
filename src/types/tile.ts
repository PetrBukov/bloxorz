import { Coordinates } from './common'

export enum TileType {
  surface = 'surface',
  fragileSurface = 'fragileSurface',
  empty = 'empty',
  gameAction = 'gameAction',
}

export enum TileStatus {
  activated = 'activated',
  blocked = 'blocked',
  available = 'available',
  hidden = 'hidden',
}

export type TileSurfaceOptions = {
  wideRight?: number
  alwaysVisible?: boolean
}

export type TileSurface = {
  type: TileType.surface
  options?: TileSurfaceOptions
  status?: TileStatus
}

export type TileEmpty = {
  type: TileType.empty
  status?: TileStatus
}

export type TileFragileSurface = {
  type: TileType.fragileSurface
  status?: TileStatus
}

export enum GameBoardActionType {
  levelCompleted = 'levelCompleted',
  moveToAnotherLevel = 'moveToAnotherLevel',
  moveToAnotherStage = 'moveToAnotherStage',
  heroBlockOutOfMap = 'heroBlockOutOfMap',
  playerHasNoMoves = 'playerHasNoMoves',
  heroBlockOnFragileSurface = 'heroBlockOnFragileSurface',
}

export type GameBoardAction =
  | {
      type: GameBoardActionType.levelCompleted
    }
  | {
      type: GameBoardActionType.moveToAnotherLevel
      levelSequenceNumber: number
    }
  | {
      type: GameBoardActionType.heroBlockOutOfMap
    }
  | {
      type: GameBoardActionType.playerHasNoMoves
    }
  | {
      type: GameBoardActionType.moveToAnotherStage
      stageSequenceNumber: number
    }
  | {
      type: GameBoardActionType.heroBlockOnFragileSurface
    }

export type TileGameAction = {
  type: TileType.gameAction
  action: GameBoardAction
  status: TileStatus
}

export type Tile = TileSurface | TileFragileSurface | TileEmpty | TileGameAction

export type TileWIthPosition = Tile & {
  position: Coordinates
}
