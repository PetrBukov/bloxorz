import { GameLevelType } from '../types'

export const getFullLevelName = (levelSequenceNumber?: number, levelType?: GameLevelType) => {
  const levelShortName = levelSequenceNumber || ''

  switch (levelType) {
    case GameLevelType.stage: {
      return `Stage ${levelShortName}`
    }
    case GameLevelType.tutorial: {
      return `Tutorial ${levelShortName}`
    }
    case GameLevelType.regular:
    default: {
      return `Level ${levelShortName}`
    }
  }
}
