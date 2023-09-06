import { Direction, GameStatus, GameBoardAction, GameBoardActionType } from '../../../types'
import { checkForHeroBlockOutOfMap } from './checkForHeroBlockOutOfMap'
import { GameCenterState } from '../GameCenter.types'
import { calcHeroStateAfterMoving } from './calcHeroStateAfterMoving'
import { getGameBoardAction } from './getGameBoardAction'
import { checkForHeroBlockOnFragileSurface } from './checkForHeroBlockOnFragileSurface'

export const calcStateAfterMoving = (
  state: GameCenterState,
  movingDirection: Direction,
): GameCenterState => {
  const {
    currentGame: { hero, moves, board },
  } = state

  let gameBoardAction: GameBoardAction | null = null

  const updatedHero = calcHeroStateAfterMoving({ hero, movingDirection })
  const updatedMoves = moves - 1

  const isHeroBlockOutOfMap = checkForHeroBlockOutOfMap({
    heroPlacement: updatedHero.placement,
    gameBoardTiles: board.tiles,
  })
  if (isHeroBlockOutOfMap) {
    gameBoardAction = {
      type: GameBoardActionType.heroBlockOutOfMap,
    }
  }

  const isHeroBlockOnFragileSurface = checkForHeroBlockOnFragileSurface({
    heroPlacement: updatedHero.placement,
    gameBoardTiles: board.tiles,
  })
  if (isHeroBlockOnFragileSurface) {
    gameBoardAction = {
      type: GameBoardActionType.heroBlockOnFragileSurface,
    }
  }

  gameBoardAction =
    gameBoardAction ??
    getGameBoardAction({ heroPlacement: updatedHero.placement, gameBoardTiles: board.tiles })

  const isPlayerHasNoMoves = updatedMoves <= 0
  if (!gameBoardAction && isPlayerHasNoMoves) {
    gameBoardAction = {
      type: GameBoardActionType.playerHasNoMoves,
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
