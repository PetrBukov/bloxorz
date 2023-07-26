export type SwipePoint = {
  x: number
  y: number
}

export enum SwipeDirection {
  'up' = 'up',
  'left' = 'left',
  'down' = 'down',
  'right' = 'right',
}

export type UseSwipeProps = {
  gestureZoneId: string
  onSwipe: (direction: SwipeDirection) => void
}
