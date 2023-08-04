import { GameLevelType } from '../types/game'

export const getFullLevelName = (levelName: string = '', levelType?: GameLevelType) => {
  switch (levelType) {
    case GameLevelType.stage: {
      return `Stage ${levelName}`
    }
    case GameLevelType.tutorial: {
      return `Tutorial ${levelName}`
    }
    case GameLevelType.regular:
    default: {
      return `Level ${levelName}`
    }
  }
}
