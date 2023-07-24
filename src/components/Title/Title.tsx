import React from 'react'
import { TitleProps } from './Title.types'
import { getTitleColor } from './Title.utils'
import { TitleContainer } from './Title.styles'

export const Title: React.FC<TitleProps> = ({ text, variant }) => {
  const color = getTitleColor(variant)

  return (
    <TitleContainer color={color}>
      <span>{text}</span>
    </TitleContainer>
  )
}
