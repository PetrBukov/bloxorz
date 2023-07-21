import { Game } from '../../types/game'

export type GameCenterAction =
  | { type: 'startNewGame'; levelNumber: number }
  | { type: 'cancelCurrentGame' }
  | { type: 'moveUp' }
  | { type: 'moveRight' }
  | { type: 'moveDown' }
  | { type: 'moveLeft' }

export type GameCenterDispatch = (action: GameCenterAction) => void

export type GameCenterState = {
  currentGame: Game | null
}
