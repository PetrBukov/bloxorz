import { Direction } from '../../types/common'
import { Game } from '../../types/game'
import { LevelID } from '../../types/gameLevel'

export enum GameCenterActionType {
  startNewGame = 'startNewGame',
  cancelCurrentGame = 'cancelCurrentGame',
  pauseCurrentGame = 'pauseCurrentGame',
  continueCurrentGame = 'continueCurrentGame',
  moveHeroBlock = 'moveHeroBlock',
  applyActiveAction = 'applyActiveAction',
}

export type GameCenterAction =
  | { type: GameCenterActionType.startNewGame; levelId: LevelID }
  | { type: GameCenterActionType.cancelCurrentGame }
  | { type: GameCenterActionType.pauseCurrentGame }
  | { type: GameCenterActionType.continueCurrentGame }
  | { type: GameCenterActionType.moveHeroBlock; direction: Direction }
  | { type: GameCenterActionType.applyActiveAction }

export type GameCenterDispatch = (action: GameCenterAction) => void

export type CompletedLevels = Record<LevelID, boolean>

export type GameCenterState = {
  currentGame: Game
  nextGame: Game | null
  completedLevels: CompletedLevels
}

export type GameCenterState_LocalStorage = Pick<GameCenterState, 'completedLevels'> & {
  version: string
}
