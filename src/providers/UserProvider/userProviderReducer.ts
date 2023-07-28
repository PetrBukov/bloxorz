import { getLevelById } from '../../utils/getLevelById'
import { UserProviderState, UserProviderAction, UserProviderActionType } from './UserProvider.types'

export const userProviderReducer = (
  state: UserProviderState,
  action: UserProviderAction,
): UserProviderState => {
  switch (action.type) {
    case UserProviderActionType.gameLevelCompleted: {
      const { levelId } = action

      const gameLevel = getLevelById(levelId)
      if (!gameLevel) {
        return state
      }

      return {
        ...state,
        completedLevels: {
          ...state.completedLevels,
          [gameLevel.id]: true,
        },
      }
    }

    default: {
      // @ts-ignore
      // TypeScript thinks that "Property 'type' does not exist on type 'never'"
      // but you and I know that in a real world everything is possible
      // so let's leave here some meaningful error for future us
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
