import { COLORS } from '../../App.styles'
import { GameScore } from '../../types/game'

export const getTitleByGameScore = (gameScore: GameScore) => {
  switch (gameScore) {
    case 1: {
      return 'You can do better!'
    }
    case 2: {
      return 'Not Bad, Megamind!'
    }
    case 3: {
      return 'You are legendary!'
    }
    default:
      return 'Try Again!'
  }
}

const SCORE_VALUE_COLORS = [COLORS.white, COLORS.red, COLORS.white, COLORS.green]
export const getScoreValueColor = (gameScore: GameScore) => SCORE_VALUE_COLORS[gameScore]
