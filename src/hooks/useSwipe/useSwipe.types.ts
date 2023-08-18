export type SwipePoint = {
  screenX: number
  screenY: number
}

export const SWIPE_DIRECTION = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
} as const

export type SwipeDirection = keyof typeof SWIPE_DIRECTION

export type UseSwipeProps = {
  gestureZoneId: string
  onSwipe: (direction: SwipeDirection) => void
}
