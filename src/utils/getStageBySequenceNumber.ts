import { LEVEL_LIST } from '../constants'
import { GameLevel, GameLevelType } from '../types'

export const getStageBySequenceNumber = (sequenceNumber: number): GameLevel | null => {
  return (
    LEVEL_LIST.filter(level => level.type === GameLevelType.stage).find(
      level => level.sequenceNumber === sequenceNumber,
    ) || null
  )
}
