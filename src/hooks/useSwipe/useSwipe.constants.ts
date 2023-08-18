import { SwipePoint } from './useSwipe.types'

// Swipe should be more than that number to avoid any swipes by mistake
export const SENSITIVITY_LEVEL = 30

export const DEFAULT_START_SWIPE_POINT: SwipePoint = {
  screenX: 0,
  screenY: 0,
}
