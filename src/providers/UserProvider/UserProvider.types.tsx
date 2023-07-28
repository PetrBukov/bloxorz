import { User } from '../../types/user'

export enum UserProviderActionType {
  gameLevelCompleted = 'gameLevelCompleted',
}

export type UserProviderAction = {
  type: UserProviderActionType.gameLevelCompleted
  levelName: string
}

export type UserProviderDispatch = (action: UserProviderAction) => void

export type UserProviderState = User
