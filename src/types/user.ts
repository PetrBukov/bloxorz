import { LevelName } from './game'

export type User = {
  completedLevels: Record<LevelName, boolean>
}
