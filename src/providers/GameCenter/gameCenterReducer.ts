import { LEVELS } from '../../constants/levels'
import { calculateHeroBlockPositionAfterMoving } from '../../utils/calculateHeroBlockPositionAfterMoving'
import { calculateHeroBlockSizeAfterMoving } from '../../utils/calculateHeroBlockSizeAfterMoving'
import { generateGameBoard } from '../../utils/generateGameBoard'
import { GameCenterAction, GameCenterActionType, GameCenterState } from './GameCenter.types'

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction,
): GameCenterState => {
  switch (action.type) {
    case GameCenterActionType.startNewGame: {
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

    case GameCenterActionType.cancelCurrentGame: {
      return {
        ...state,
        currentGame: null,
      }
    }

    case GameCenterActionType.moveUp: {
      if (state.currentGame) {
        const size = calculateHeroBlockSizeAfterMoving(state.currentGame.hero.size, action.type)
        const position = calculateHeroBlockPositionAfterMoving({
          ...state.currentGame.hero,
          actionType: action.type,
        })

        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            hero: {
              size,
              position,
            },
          },
        }
      }

      return state
    }

    case GameCenterActionType.moveDown: {
      if (state.currentGame) {
        const size = calculateHeroBlockSizeAfterMoving(state.currentGame.hero.size, action.type)
        const position = calculateHeroBlockPositionAfterMoving({
          ...state.currentGame.hero,
          actionType: action.type,
        })

        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            hero: {
              size,
              position,
            },
          },
        }
      }

      return state
    }

    case GameCenterActionType.moveLeft: {
      if (state.currentGame) {
        const size = calculateHeroBlockSizeAfterMoving(state.currentGame.hero.size, action.type)
        const position = calculateHeroBlockPositionAfterMoving({
          ...state.currentGame.hero,
          actionType: action.type,
        })

        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            hero: {
              size,
              position,
            },
          },
        }
      }

      return state
    }

    case GameCenterActionType.moveRight: {
      if (state.currentGame) {
        const size = calculateHeroBlockSizeAfterMoving(state.currentGame.hero.size, action.type)
        const position = calculateHeroBlockPositionAfterMoving({
          ...state.currentGame.hero,
          actionType: action.type,
        })

        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            hero: {
              size,
              position,
            },
          },
        }
      }

      return state
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
