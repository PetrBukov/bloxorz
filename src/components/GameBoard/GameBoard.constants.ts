import { KEYBOARD } from '../../constants/keyboard'
import { DIRECTION } from '../../types/common'

export const GESTURE_ZONE_ID = 'gesture-zone'

export const KEY_PRESS_TO_DIRECTION_MAP = {
  [KEYBOARD.ArrowUp]: DIRECTION.up,
  [KEYBOARD.ArrowRight]: DIRECTION.right,
  [KEYBOARD.ArrowDown]: DIRECTION.down,
  [KEYBOARD.ArrowLeft]: DIRECTION.left,
} as const
