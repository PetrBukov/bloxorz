import { Dimensions } from './common'
import { Hero } from './hero'
import { Surface } from './surface'
import { TileText } from './tileText'

export type LevelID = string

export type LevelName = string

export enum GameLevelType {
  regular = 'regular',
  tutorial = 'tutorial',
  stage = 'stage',
}

type GameLevelCommon<T> = T & {
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
