export type SwipePoint = {
  x: number
  y: number
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
