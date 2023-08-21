import React, { memo } from 'react'
import { GiPauseButton } from 'react-icons/gi'

import { MenuButtonProps } from './MenuButton.types'
import { MenuButtonContainer } from './MenuButton.styles'

export const MenuButton: React.FC<MenuButtonProps> = memo(({ onClick, disabled }) => {
  return (
    <MenuButtonContainer disabled={disabled} onClick={onClick}>
      <GiPauseButton size="30" />
    </MenuButtonContainer>
  )
})
