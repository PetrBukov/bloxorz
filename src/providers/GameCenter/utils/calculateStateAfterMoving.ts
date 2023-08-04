import { Direction } from '../../../types/common'
import { GameBoardAction, GameBoardActionType } from '../../../types/tile'
import { checkForHeroBlockOutOfMap } from './checkForHeroBlockOutOfMap'
import { getRectangleTileIndexes } from '../../../utils/getRectangleTileIndexes'
import { GameCenterState } from '../GameCenter.types'
import { calculateHeroStateAfterMoving } from './calculateHeroStateAfterMoving'
import { getGameBoardAction } from './getGameBoardAction'
import { GameStatus } from '../../../types/game'

export const calculateStateAfterMoving = (
  state: GameCenterState,
  movingDirection: Direction,
): GameCenterState => {
  const {
    currentGame: { hero, moves, board },
  } = state

  let gameBoardAction: GameBoardAction | null = null

  const updatedHero = calculateHeroStateAfterMoving({ hero, movingDirection })
  const updatedMoves = moves - 1

  const heroBlockIndexes = getRectangleTileIndexes({
    rectanglePosition: updatedHero.position,
    rectangleSize: updatedHero.size,
    gameLevelSize: board.size,
  })

  const isHeroBlockOutOfMap = checkForHeroBlockOutOfMap({
    heroBlockIndexes,
    gameBoardTiles: board.tiles,
  })
  console.log({ heroBlockIndexes, isHeroBlockOutOfMap })
  if (isHeroBlockOutOfMap) {
    gameBoardAction = {
      type: GameBoardActionType.heroBlockOutOfMap,
    }
  }

  gameBoardAction =
    gameBoardAction ?? getGameBoardAction({ heroBlockIndexes, gameBoardTiles: board.tiles })

  const isPlayerHasNoMoves = updatedMoves <= 0
  if (!gameBoardAction && isPlayerHasNoMoves) {
    gameBoardAction = {
      type: GameBoardActionType.heroBlockOutOfMap,
    }
  }

  return {
    ...state,
    currentGame: {
      ...state.currentGame,
      hero: updatedHero,
      moves: updatedMoves,
      activeAction: gameBoardAction,
      status: gameBoardAction ? GameStatus.actionProcessing : state.currentGame.status,
    },
  }
}
