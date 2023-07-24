import React, { PropsWithChildren } from 'react'

import { ModalProps } from './Modal.types'
import { ModalContainer, ModalOverlay } from './Modal.styles'
import { Title } from '../Title/Title'

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  titleText,
  titleVariant,
  children,
}) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <Title text={titleText} variant={titleVariant} />
        {children}
      </ModalContainer>
    </ModalOverlay>
  )
}
