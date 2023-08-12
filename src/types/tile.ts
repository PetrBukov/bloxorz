import { Coordinates } from './common'

export enum TileType {
  surface = 'surface',
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

export enum GameBoardActionType {
  levelCompleted = 'levelCompleted',
  moveToAnotherLevel = 'moveToAnotherLevel',
  moveToAnotherStage = 'moveToAnotherStage',
  heroBlockOutOfMap = 'heroBlockOutOfMap',
  playerHasNoMoves = 'playerHasNoMoves',
}

export type GameBoardAction =
  | {
      type: GameBoardActionType.levelCompleted
    }
  | {
      type: GameBoardActionType.moveToAnotherLevel
      levelId: string
    }
  | {
      type: GameBoardActionType.heroBlockOutOfMap
    }
  | {
      type: GameBoardActionType.playerHasNoMoves
    }
  | {
      type: GameBoardActionType.moveToAnotherStage
      stageId: string
    }

export type TileGameAction = {
  type: TileType.gameAction
  action: GameBoardAction
  status: TileStatus
}

export type Tile = TileSurface | TileEmpty | TileGameAction

export type TileWIthPosition = Tile & {
  position: Coordinates
}
