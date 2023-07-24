import React from 'react'
import { RatingContainer, RatingStar } from './Rating.styles'
import { RatingProps } from './Rating.types'

export const Rating: React.FC<RatingProps> = ({ gameScore }) => {
  return (
    <RatingContainer>
      <RatingStar gameScore={gameScore}>⭐️</RatingStar>
      <RatingStar gameScore={gameScore}>⭐️</RatingStar>
      <RatingStar gameScore={gameScore}>⭐️</RatingStar>
    </RatingContainer>
  )
}
