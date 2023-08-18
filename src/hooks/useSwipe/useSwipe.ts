import { useCallback, useEffect } from 'react'

import { SWIPE_DIRECTION, SwipeDirection, SwipePoint, UseSwipeProps } from './useSwipe.types'
import { SENSITIVITY_LEVEL, DEFAULT_START_SWIPE_POINT } from './useSwipe.constants'

export const useSwipe = ({ gestureZoneId, onSwipe }: UseSwipeProps) => {
  const swipeAction = useCallback(
    (startPoint: SwipePoint, endPoint: SwipePoint) => {
      const diffX = startPoint.screenX - endPoint.screenX
      const diffY = startPoint.screenY - endPoint.screenY

      const absDiffX = Math.abs(diffX)
      const absDiffY = Math.abs(diffY)

      const isSwipe = absDiffX > SENSITIVITY_LEVEL || absDiffY > SENSITIVITY_LEVEL

      if (isSwipe) {
        const isHorizontalSwipe = absDiffX > absDiffY && absDiffX > SENSITIVITY_LEVEL
        const isVerticalSwipe = absDiffX < absDiffY && absDiffY > SENSITIVITY_LEVEL

        let swipeDirection: SwipeDirection = SWIPE_DIRECTION.left

        if (isHorizontalSwipe) {
          swipeDirection = diffX > 0 ? SWIPE_DIRECTION.left : SWIPE_DIRECTION.right
        }

        if (isVerticalSwipe) {
          swipeDirection = diffY > 0 ? SWIPE_DIRECTION.up : SWIPE_DIRECTION.down
        }

        onSwipe(swipeDirection)
      }
    },
    [onSwipe],
  )

  useEffect(() => {
    let startPoint: SwipePoint = DEFAULT_START_SWIPE_POINT
    const gestureZone = document.getElementById(gestureZoneId)

    const touchStartHandler = ({ changedTouches }: TouchEvent) => {
      const { screenX, screenY } = changedTouches[0]
      startPoint = { screenX, screenY }
    }

    const touchEndHandler = ({ changedTouches }: TouchEvent) => {
      const { screenX, screenY } = changedTouches[0]
      const endPoint = { screenX, screenY }

      swipeAction(startPoint, endPoint)

      startPoint = DEFAULT_START_SWIPE_POINT
    }

    if (gestureZone) {
      gestureZone.addEventListener('touchstart', touchStartHandler, false)
      gestureZone.addEventListener('touchend', touchEndHandler, false)
    }

    return () => {
      if (gestureZone) {
        gestureZone.removeEventListener('touchstart', touchStartHandler)
        gestureZone.removeEventListener('touchend', touchEndHandler)
      }
    }
  }, [gestureZoneId, swipeAction])
}
