import { KEYBOARD } from '../../constants/keyboard'
import { SwipeDirection } from '../../hooks'
import { GameCenterActionType } from '../../providers/GameCenter/GameCenter.types'

export const GESTURE_ZONE_ID = 'gesture-zone'

export const DIRECTION_TO_ACTION_MAP = {
  [SwipeDirection.up]: GameCenterActionType.moveUp,
  [SwipeDirection.left]: GameCenterActionType.moveLeft,
  [SwipeDirection.down]: GameCenterActionType.moveDown,
  [SwipeDirection.right]: GameCenterActionType.moveRight,
} as const

export const KEY_PRESS_TO_ACTION_MAP = {
  [KEYBOARD.ArrowUp]: GameCenterActionType.moveUp,
  [KEYBOARD.ArrowLeft]: GameCenterActionType.moveLeft,
  [KEYBOARD.ArrowDown]: GameCenterActionType.moveDown,
  [KEYBOARD.ArrowRight]: GameCenterActionType.moveRight,
} as const
