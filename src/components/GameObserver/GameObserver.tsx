import React, { PropsWithChildren } from 'react'

import { useApplyActiveAction } from './useLevelCompletedAction'

export const GameObserver: React.FC<PropsWithChildren> = ({ children }) => {
  useApplyActiveAction()

  return <React.Fragment>{children}</React.Fragment>
}
