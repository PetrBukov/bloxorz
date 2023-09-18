import React, { useEffect, useState } from 'react'
import { getLocalStorageData } from '../../utils'
import { WelcomeScreen } from '../WelcomeScreen'
import { GameCenter } from '../../providers'
import { GameScreen } from '../GameScreen'

export const AppScreens: React.FC = () => {
  const [loadingGameData, setLoadingGameData] = useState<boolean>(true)
  const [lastCompletedLevel, setLastCompletedLevel] = useState<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Let's just imagine that someday we will load game data from server
      // before User can start a game
      const { lastCompletedLevel } = getLocalStorageData()

      setLastCompletedLevel(lastCompletedLevel)
      setLoadingGameData(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  if (loadingGameData) {
    return <WelcomeScreen />
  }

  return (
    <GameCenter lastCompletedLevel={lastCompletedLevel}>
      <GameScreen />
    </GameCenter>
  )
}
