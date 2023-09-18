import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import {
  GameLoadingContainer,
  WelcomeScreenContainer,
  WelcomeScreenLogo,
  WelcomeScreenSubtitle,
} from './WelcomeScreen.styles'

export const WelcomeScreen: React.FC = () => {
  return (
    <WelcomeScreenContainer>
      <WelcomeScreenSubtitle>welcome to the ...</WelcomeScreenSubtitle>
      <WelcomeScreenLogo>Puzzle Slime</WelcomeScreenLogo>
      <GameLoadingContainer>
        <AiOutlineLoading3Quarters size={16} />
        loading game data
      </GameLoadingContainer>
    </WelcomeScreenContainer>
  )
}
