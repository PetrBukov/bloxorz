import { LEVELS_PER_STAGE } from '../constants/common'

export const calcStageSequenceNumber = (levelSequenceNumber: number) => {
  return Math.trunc((levelSequenceNumber - 1) / LEVELS_PER_STAGE + 1)
}
