import React, { memo } from 'react'

import { MovesCounterProps } from './MovesCounter.types'
import { MovesCounterContainer } from './MovesCounter.styles'

export const MovesCounter: React.FC<MovesCounterProps> = memo(({ visible, moves }) => {
  return <MovesCounterContainer visible={visible}>{moves < 99 && moves}</MovesCounterContainer>
})
