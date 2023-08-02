export enum TileType {
  surface = 'surface',
  empty = 'empty',
  gameAction = 'gameAction',
}

export type TileSurfaceOptions = {
  wideRight?: boolean
}

export type TileSurface = {
  type: TileType.surface
  options?: TileSurfaceOptions
}

export type TileEmpty = {
  type: TileType.empty
}

export enum GameBoardActionType {
  levelCompleted = 'levelCompleted',
}

export type GameBoardAction = {
  type: GameBoardActionType.levelCompleted
}

export type TileGameAction = {
  type: TileType.gameAction
  action: GameBoardAction
}

export type Tile = TileSurface | TileEmpty | TileGameAction
