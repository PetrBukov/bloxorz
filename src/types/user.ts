import { LevelID } from './game'

export type User = {
  completedLevels: Record<LevelID, boolean>
}

export type User_LocalStorage = {
  completedLevels: Record<LevelID, boolean>
  version: string
}
