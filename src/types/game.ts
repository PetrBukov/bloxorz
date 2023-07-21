import { Coordinates, Dimensions } from './common'
import { Hero } from './hero'

export type Surface = {
  position: Coordinates
  size: Dimensions
}

export type GameLevel = {
  size: Dimensions
  surfaces: Array<Surface>
  start: Coordinates
  target: Coordinates
}

export enum TileType {
  surface = 'surface',
  empty = 'empty',
  target = 'target',
}

export type Tile = {
  type: TileType
}

export type GameBoard = {
  size: Dimensions
  // Despite, game board is often a rectangle with rows and columns
  // we store all the tiles in the flat list but not as a list of lists
  // because it's much easier to work with a flat structure.
  tiles: Array<Tile>
}

export type Game = {
  board: GameBoard
  hero: Hero
}
