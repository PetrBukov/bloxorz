import { useCallback, useEffect, useState } from 'react'

import { SWIPE_DIRECTION, SwipeDirection, SwipePoint, UseSwipeProps } from './useSwipe.types'
import { SENSITIVITY_LEVEL } from './useSwipe.constants'

export const useSwipe = ({ gestureZoneId, onSwipe }: UseSwipeProps) => {
  const [startPoint, setStartPoint] = useState<SwipePoint>(() => ({
    x: 0,
    y: 0,
  }))

  const swipeAction = useCallback(
    (startPoint: SwipePoint, endPoint: SwipePoint) => {
      const diffX = startPoint.x - endPoint.x
      const diffY = startPoint.y - endPoint.y

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

      setStartPoint({ x: 0, y: 0 })
    },
    [onSwipe],
  )

  const touchStartHandler = useCallback((event: TouchEvent) => {
    setStartPoint({ x: event.changedTouches[0].screenX, y: event.changedTouches[0].screenY })
  }, [])

  const touchEndHandler = useCallback(
    (event: TouchEvent) => {
      swipeAction(startPoint, {
        x: event.changedTouches[0].screenX,
        y: event.changedTouches[0].screenY,
      })
    },
    [startPoint, swipeAction],
  )

  useEffect(() => {
    const gestureZone = document.getElementById(gestureZoneId)

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
  }, [gestureZoneId, touchStartHandler, touchEndHandler])

  return ''
}
