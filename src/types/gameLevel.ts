import { Dimensions } from './common'
import { Hero } from './hero'
import { Surface } from './surface'
import { TileText } from './tileText'

export enum GameLevelType {
  regular = 'regular',
  tutorial = 'tutorial',
  stage = 'stage',
}

type GameLevelCommon<T> = T & {
  sequenceNumber: number
  size: Dimensions
  surfaces: Array<Surface>
  tileTexts?: Array<TileText>
  hero: Hero
  moves: number
}

export type GameLevelRegular = GameLevelCommon<{
  type: GameLevelType.regular
}>

export type GameLevelStage = GameLevelCommon<{
  type: GameLevelType.stage
}>

export type GameLevel = GameLevelRegular | GameLevelStage
