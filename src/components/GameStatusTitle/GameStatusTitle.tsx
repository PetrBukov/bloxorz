import React from 'react'
import { useGameCenter } from '../../providers/GameCenter'
import { GameStatus } from '../../types/game'
import {
  StatusContainer,
  StatusInner,
  RatingContainer,
  VictoryScores,
  VictoryScoresItem,
  FailureStatusText,
  PausedStatusText,
} from './GameStatusTitle.styles'
import { calculateGameScore } from '../../utils/calculateGameScore'
import { Rating } from '../Rating'
import { getLevelByName } from '../../utils/getLevelByName'
import { getScoreValueColor } from './GameStatusTitle.utils'

export const GameStatusTitle: React.FC = () => {
  const {
    state: { currentGame },
  } = useGameCenter()

  if (currentGame && currentGame.status === GameStatus.failure) {
    return (
      <StatusContainer gameStatus={currentGame.status}>
        <StatusInner>
          <FailureStatusText>Oooops ...</FailureStatusText>
          <FailureStatusText>Try again!</FailureStatusText>
        </StatusInner>
      </StatusContainer>
    )
  }

  if (currentGame && currentGame.status === GameStatus.paused) {
    return (
      <StatusContainer gameStatus={currentGame.status}>
        <StatusInner>
          <PausedStatusText>Game is ...</PausedStatusText>
          <PausedStatusText>Paused</PausedStatusText>
        </StatusInner>
      </StatusContainer>
    )
  }

  if (currentGame && currentGame.status === GameStatus.victory) {
    const { moves, levelName } = currentGame

    const gameScore = calculateGameScore(moves, levelName)

    const level = getLevelByName(levelName)
    const designMoves = level?.moves?.[0]
    const gameScoreValueColor = getScoreValueColor(gameScore)

    return (
      <StatusContainer gameStatus={currentGame.status}>
        <StatusInner>
          <RatingContainer>
            <Rating gameScore={gameScore} />
          </RatingContainer>
          <VictoryScores>
            <VictoryScoresItem valueColor={gameScoreValueColor}>
              Your moves: <span>{currentGame.moves}</span>
            </VictoryScoresItem>
            <VictoryScoresItem valueColor={gameScoreValueColor}>
              Design moves: <span>{designMoves}</span>
            </VictoryScoresItem>
          </VictoryScores>
        </StatusInner>
      </StatusContainer>
    )
  }

  return null
}
