import { GameStatus } from '../../types/game'
import { calculateGameStatusAfterBlockMoving } from '../../utils/calculateGameStatusAfterBlockMoving'
import { calculateHeroBlockPositionAfterMoving } from '../../utils/calculateHeroBlockPositionAfterMoving'
import { calculateHeroBlockSizeAfterMoving } from '../../utils/calculateHeroBlockSizeAfterMoving'
import { generateGameBoard } from '../../utils/generateGameBoard'
import { getLevelByName } from '../../utils/getLevelByName'
import { GameCenterAction, GameCenterActionType, GameCenterState } from './GameCenter.types'

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction,
): GameCenterState => {
  switch (action.type) {
    case GameCenterActionType.startNewGame: {
      const { levelName } = action

      const gameLevel = getLevelByName(levelName)
      if (!gameLevel) {
        return state
      }

      const board = generateGameBoard(gameLevel)

      return {
        ...state,
        currentGame: {
          levelName,
          status: GameStatus.active,
          hero: {
            position: gameLevel.start,
            size: {
              width: 1,
              height: 1,
            },
          },
          board,
          moves: 0,
        },
      }
    }

    case GameCenterActionType.cancelCurrentGame: {
      return {
        ...state,
        currentGame: null,
      }
    }

    case GameCenterActionType.pauseCurrentGame: {
      if (state.currentGame && state.currentGame.status === GameStatus.active) {
        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            status: GameStatus.paused,
          },
        }
      }

      return state
    }

    case GameCenterActionType.continueCurrentGame: {
      if (state.currentGame && state.currentGame.status === GameStatus.paused) {
        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            status: GameStatus.active,
          },
        }
      }

      return state
    }

    case GameCenterActionType.moveUp:
    case GameCenterActionType.moveRight:
    case GameCenterActionType.moveDown:
    case GameCenterActionType.moveLeft: {
      if (state.currentGame && state.currentGame.status === GameStatus.active) {
        const size = calculateHeroBlockSizeAfterMoving(state.currentGame.hero.size, action.type)

        const position = calculateHeroBlockPositionAfterMoving({
          ...state.currentGame.hero,
          actionType: action.type,
        })

        const status = calculateGameStatusAfterBlockMoving({
          heroPosition: position,
          heroSize: size,
          gameLevelSize: state.currentGame.board.size,
          gameBoardTiles: state.currentGame.board.tiles,
          target: state.currentGame.board.target,
        })

        const moves = state.currentGame.moves + 1

        return {
          ...state,
          currentGame: {
            ...state.currentGame,
            moves,
            status,
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
