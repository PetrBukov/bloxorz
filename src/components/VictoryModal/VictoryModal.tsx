import React, { useCallback } from 'react'

import { Button } from '../Button'
import {
  VictoryModalActions,
  VictoryModalContainer,
  VictoryModalContent,
  VictoryModalOverlay,
  VictoryModalScores,
  VictoryModalScoresItem,
  VictoryModalTitle,
} from './VictoryModal.styles'
import { Rating } from '../Rating'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import { calculateGameScore } from '../../utils/calculateGameScore'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'
import { getLevelByName } from '../../utils/getLevelByName'

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
  const designMoves = level?.moves

  const gameScore = calculateGameScore(moves, levelName)

  return (
    <VictoryModalOverlay>
      <VictoryModalContainer>
        <VictoryModalTitle className="page-title">
          <span>Congratulations</span>
        </VictoryModalTitle>
        <VictoryModalContent>
          <Rating gameScore={gameScore} />
          <VictoryModalScores>
            <VictoryModalScoresItem gameScore={gameScore}>
              Your moves: <span>{moves}</span>
            </VictoryModalScoresItem>
            <VictoryModalScoresItem gameScore={gameScore}>
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
      </VictoryModalContainer>
    </VictoryModalOverlay>
  )
}
