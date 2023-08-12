import { useEffect, useState } from 'react'

export const useThrottle = (action: Function, ms: number) => {
  const [isThrottled, setIsThrottled] = useState(false)
  const [savedArgs, setSavedArgs] = useState<Array<unknown> | null>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (isThrottled) {
      timer = setTimeout(() => {
        setIsThrottled(false)

        if (savedArgs) {
          action(...savedArgs)
          setSavedArgs(null)
          setIsThrottled(true)
        }
      }, ms)
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [ms, isThrottled, savedArgs, action])

  const throttledAction = (...args: Array<unknown>) => {
    if (isThrottled) {
      setSavedArgs(args)
      return
    }

    action(...args)

    setIsThrottled(true)
  }

  return throttledAction
}
