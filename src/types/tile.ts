export enum TileType {
  surface = 'surface',
  surfaceWideRight = 'surfaceWideRight',
  empty = 'empty',
  target = 'target',
}

export type Tile = {
  type: TileType
}
