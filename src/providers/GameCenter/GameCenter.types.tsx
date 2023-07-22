import { Game } from '../../types/game'

export enum GameCenterActionType {
  startNewGame = 'startNewGame',
  cancelCurrentGame = 'cancelCurrentGame',
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
  | { type: GameCenterActionType.startNewGame; levelNumber: number }
  | { type: GameCenterActionType.cancelCurrentGame }
  | { type: GameCenterActionType.moveUp }
  | { type: GameCenterActionType.moveRight }
  | { type: GameCenterActionType.moveDown }
  | { type: GameCenterActionType.moveLeft }

export type GameCenterDispatch = (action: GameCenterAction) => void

export type GameCenterState = {
  currentGame: Game | null
}
