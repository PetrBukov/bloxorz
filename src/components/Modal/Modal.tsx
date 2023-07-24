import React, { PropsWithChildren } from 'react'

import { ModalProps } from './Modal.types'
import { ModalContainer, ModalOverlay, ModalTitle } from './Modal.styles'
import { getTitleColor } from './Modal.utils'

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ title, variant, children }) => {
  const titleColor = getTitleColor(variant)

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle color={titleColor}>
          <span>{title}</span>
        </ModalTitle>
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}
