import React, { useCallback } from 'react'

import { Button } from '../Button'
import {
  VictoryModalActions,
  VictoryModalContent,
  VictoryModalScores,
  VictoryModalScoresItem,
} from './VictoryModal.styles'
import { Rating } from '../Rating'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { calculateGameScore } from '../../utils/calculateGameScore'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { getLevelByName } from '../../utils/getLevelByName'
import { Modal } from '../Modal/Modal'
import { getScoreValueColor, getTitleByGameScore } from './VictoryModal.utils'
import { TitleVariant } from '../Title'
import { getNextLevelByName } from '../../utils/getNextLevelByName'

export const VictoryModal: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const nextLevel = getNextLevelByName(state?.currentGame?.levelName || '')

  const onReplayGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: state.currentGame.levelName })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const onNextLevelStart = useCallback(() => {
    if (nextLevel) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: nextLevel.name })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const onCancelGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.cancelCurrentGame })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  if (!state.currentGame || state.currentGame.status !== GameStatus.victory) {
    return null
  }

  const {
    currentGame: { moves, levelName },
  } = state

  const level = getLevelByName(levelName)
  const designMoves = level?.moves?.[0]

  const gameScore = calculateGameScore(moves, levelName)
  const title = getTitleByGameScore(gameScore)

  const gameScoreValueColor = getScoreValueColor(gameScore)

  return (
    <Modal titleText={title} titleVariant={TitleVariant.success}>
      <VictoryModalContent>
        <Rating gameScore={gameScore} />
        <VictoryModalScores>
          <VictoryModalScoresItem valueColor={gameScoreValueColor}>
            Your moves: <span>{moves}</span>
          </VictoryModalScoresItem>
          <VictoryModalScoresItem valueColor={gameScoreValueColor}>
            Design moves: <span>{designMoves}</span>
          </VictoryModalScoresItem>
        </VictoryModalScores>
        <VictoryModalActions>
          <Button variant="outlined" onClick={onReplayGame}>
            Replay
          </Button>
          <Button variant="outlined" onClick={onNextLevelStart}>
            Next
          </Button>
          <Button variant="outlined" onClick={onCancelGame}>
            Menu
          </Button>
        </VictoryModalActions>
      </VictoryModalContent>
    </Modal>
  )
}
