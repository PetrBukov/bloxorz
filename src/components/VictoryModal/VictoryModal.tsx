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
import { ModalVariant } from '../Modal'
import { getScoreValueColor, getTitleByGameScore } from './VictoryModal.utils'

export const VictoryModal: React.FC = () => {
  const { state, dispatch } = useGameCenter()

  const onReplayGame = useCallback(() => {
    if (state.currentGame) {
      dispatch({ type: GameCenterActionType.startNewGame, levelName: state.currentGame.levelName })
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
    <Modal title={title} variant={ModalVariant.success}>
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
          <Button variant="outlined" disabled>
            Next
          </Button>
          <Button variant="outlined" disabled>
            Menu
          </Button>
        </VictoryModalActions>
      </VictoryModalContent>
    </Modal>
  )
}
