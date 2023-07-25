import { COLORS } from '../../App.styles'
import { GameScore } from '../../types/game'

const SCORE_VALUE_COLORS = [COLORS.white, COLORS.red, COLORS.yellow, COLORS.acidGrid]
export const getScoreValueColor = (gameScore: GameScore) => SCORE_VALUE_COLORS[gameScore]
