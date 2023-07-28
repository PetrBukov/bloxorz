import { GameStatus } from '../../types/game'

export const getStatusText = (
  gameStatus?: GameStatus,
  levelName?: string,
): [topText: string, bottomText: string] | null => {
  switch (gameStatus) {
    case GameStatus.failure: {
      return ['Oooops ...', 'Try again!']
    }
    case GameStatus.paused: {
      return ['Game is ...', 'Paused']
    }
    case GameStatus.victory: {
      return [`Level ${levelName}`, 'Completed']
    }
    default:
      return null
  }
}
