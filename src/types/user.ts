import { LevelID } from './game'

export type User = {
  completedLevels: Record<LevelID, boolean>
}
