import { Game } from '../../types/game'

export enum GameCenterActionType {
  startNewGame = 'startNewGame',
  cancelCurrentGame = 'cancelCurrentGame',
  pauseCurrentGame = 'pauseCurrentGame',
  continueCurrentGame = 'continueCurrentGame',
  moveUp = 'moveUp',
  moveRight = 'moveRight',
  moveDown = 'moveDown',
  moveLeft = 'moveLeft',
}

export type HeroBlockMovingActionType =
  | GameCenterActionType.moveDown
  | GameCenterActionType.moveLeft
  | GameCenterActionType.moveRight
  | GameCenterActionType.moveUp

export type GameCenterAction =
  | { type: GameCenterActionType.startNewGame; levelName: string }
  | { type: GameCenterActionType.cancelCurrentGame }
  | { type: GameCenterActionType.pauseCurrentGame }
  | { type: GameCenterActionType.continueCurrentGame }
  | { type: GameCenterActionType.moveUp }
  | { type: GameCenterActionType.moveRight }
  | { type: GameCenterActionType.moveDown }
  | { type: GameCenterActionType.moveLeft }

export type GameCenterDispatch = (action: GameCenterAction) => void

export type GameCenterState = {
  currentGame: Game | null
}
