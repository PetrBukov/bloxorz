import { LEVEL_LIST } from '../constants'
import { GameLevel, GameLevelType } from '../types'

export const getLevelBySequenceNumber = (sequenceNumber: number): GameLevel | null => {
  return (
    LEVEL_LIST.filter(level => level.type === GameLevelType.regular).find(
      level => level.sequenceNumber === sequenceNumber,
    ) || null
  )
}
