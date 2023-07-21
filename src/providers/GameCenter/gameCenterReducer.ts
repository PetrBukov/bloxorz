import { LEVELS } from '../../constants/levels'
import { generateGameBoard } from '../../utils/generateGameBoard'
import { GameCenterAction, GameCenterState } from './GameCenter.types'

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction,
): GameCenterState => {
  switch (action.type) {
    case 'startNewGame': {
      const { levelNumber } = action

      const gameLevel = LEVELS[levelNumber]
      const board = generateGameBoard(gameLevel)

      return {
        ...state,
        currentGame: {
          hero: {
            position: gameLevel.start,
            size: {
              width: 1,
              height: 1,
            },
          },
          board,
        },
      }
    }

    case 'cancelCurrentGame': {
      return {
        ...state,
        currentGame: null,
      }
    }

    default: {
      // @ts-ignore
      // TypeScript thinks that "Property 'type' does not exist on type 'never'"
      // but you and I know that in a real world everything is possible
      // so let's leave here some meaningful error for future us
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
