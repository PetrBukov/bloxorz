import { LevelID } from '../../types/game'
import { User } from '../../types/user'

export enum UserProviderActionType {
  gameLevelCompleted = 'gameLevelCompleted',
}

export type UserProviderAction = {
  type: UserProviderActionType.gameLevelCompleted
  levelId: LevelID
}

export type UserProviderDispatch = (action: UserProviderAction) => void

export type UserProviderState = User
