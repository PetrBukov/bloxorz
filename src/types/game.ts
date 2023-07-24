import { Coordinates, Dimensions } from './common'
import { Hero } from './hero'

export type Surface = {
  position: Coordinates
  size: Dimensions
}

export type GameLevelMoves = [topRate: number, middleRate: number]

export type GameLevel = {
  name: string
  size: Dimensions
  surfaces: Array<Surface>
  start: Coordinates
  target: Coordinates
  moves: GameLevelMoves
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
  target: Coordinates
  // Despite, game board is often a rectangle with rows and columns
  // we store all the tiles in the flat list but not as a list of lists
  // because it's much easier to work with a flat structure.
  tiles: Array<Tile>
}

export enum GameStatus {
  active = 'active',
  failure = 'failure',
  victory = 'victory',
  paused = 'paused',
}

export type Game = {
  levelName: string
  status: GameStatus
  board: GameBoard
  hero: Hero
  moves: number
}

// We use GameScore instead of a number type because in the future we may want to change this
// type from number to some object with several props and it would be easier to refactor code
// if we mark every place where we work with GameScore in advance
export type GameScore = number
