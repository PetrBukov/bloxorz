import { Coordinates, Dimensions } from './common'
import { Hero } from './hero'
import { Surface } from './surface'
import { GameBoardAction, Tile } from './tile'

export type LevelID = string

export type LevelName = string

export enum GameLevelType {
  regular = 'regular',
  tutorial = 'tutorial',
  stage = 'stage',
}

export type TileText = {
  text: string
  position: Coordinates
  size: Dimensions
}

export type GameLevelCommon<T> = T & {
  id: LevelID
  name: LevelName
  nextLevelId: LevelID | null
  previousLevelId: LevelID | null
  stageId: LevelID | null
  size: Dimensions
  surfaces: Array<Surface>
  tileTexts?: Array<TileText>
  hero: Hero
  moves: number
}

export type GameLevelRegular = GameLevelCommon<{
  type: GameLevelType.regular
}>

export type GameLevelTutorial = GameLevelCommon<{
  type: GameLevelType.tutorial
}>

export type GameLevelStage = GameLevelCommon<{
  type: GameLevelType.stage
  stageLevels: Array<LevelID>
}>

export type GameLevel = GameLevelRegular | GameLevelTutorial | GameLevelStage

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
  actionProcessing = 'actionProcessing',
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
  activeAction: GameBoardAction | null
}
