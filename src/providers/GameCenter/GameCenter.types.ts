import { Direction, Game } from '../../types'

export enum GameCenterActionType {
  startNewGame = 'startNewGame',
  cancelCurrentGame = 'cancelCurrentGame',
  pauseCurrentGame = 'pauseCurrentGame',
  continueCurrentGame = 'continueCurrentGame',
  moveHeroBlock = 'moveHeroBlock',
  applyActiveAction = 'applyActiveAction',
}

export type GameCenterAction =
  | { type: GameCenterActionType.startNewGame; levelSequenceNumber: number }
  | { type: GameCenterActionType.cancelCurrentGame }
  | { type: GameCenterActionType.pauseCurrentGame }
  | { type: GameCenterActionType.continueCurrentGame }
  | { type: GameCenterActionType.moveHeroBlock; direction: Direction }
  | { type: GameCenterActionType.applyActiveAction }

export type GameCenterDispatch = (action: GameCenterAction) => void

export type GameCenterState = {
  currentGame: Game
  nextGame: Game | null
  lastCompletedLevel: number
}

export type GameCenterState_LocalStorage = Pick<GameCenterState, 'lastCompletedLevel'> & {
  version: string
}
