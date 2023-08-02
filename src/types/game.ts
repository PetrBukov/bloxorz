import { Coordinates, Dimensions } from './common'
import { Hero } from './hero'
import { Surface } from './surface'
import { Tile } from './tile'

export type LevelID = string

export type LevelName = string

export enum GameLevelType {
  regular = 'regular',
  tutorial = 'tutorial',
}

export type TileText = {
  text: string
  position: Coordinates
  size: Dimensions
}

export type GameLevel = {
  id: LevelID
  name: LevelName
  type: GameLevelType
  nextLevelId: LevelID | null
  previousLevelId: LevelID | null
  size: Dimensions
  surfaces: Array<Surface>
  tileTexts?: Array<TileText>
  hero: Hero
  moves: number
}

export type GameBoard = {
  size: Dimensions
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
  levelId: LevelID
  levelName: LevelName
  levelType: GameLevelType
  status: GameStatus
  board: GameBoard
  tileTexts?: Array<TileText>
  hero: Hero
  moves: number
}

// We use GameScore instead of a number type because in the future we may want to change this
// type from number to some object with several props and it would be easier to refactor code
// if we mark every place where we work with GameScore in advance
export type GameScore = number
