import { GameBoard } from './gameBoard'
import { GameLevelType, LevelID, LevelName } from './gameLevel'
import { Hero } from './hero'
import { GameBoardAction } from './tile'
import { TileText } from './tileText'

export enum GameStatus {
  active = 'active',
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
