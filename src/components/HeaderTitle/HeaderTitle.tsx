import React, { memo } from 'react'
import { getFullLevelName } from '../../utils'
import { HeaderTitleContainer } from './HeaderTitle.styles'
import { HeaderTitleProps } from './HeaderTitle.types'

export const HeaderTitle: React.FC<HeaderTitleProps> = memo(
  ({ levelSequenceNumber, levelType }) => {
    return (
      <HeaderTitleContainer>
        {getFullLevelName(levelSequenceNumber, levelType)}
      </HeaderTitleContainer>
    )
  },
)
