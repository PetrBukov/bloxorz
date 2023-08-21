import React, { useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, Header, Navigation } from './components'
import { WelcomeScreen } from './components/WelcomeScreen/WelcomeScreen'
import { getLocalStorageData } from './utils/getLocalStorageData'

const AppContent: React.FC = () => {
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
      <Header />
      <Content />
      <Footer />
      <Navigation />
    </GameCenter>
  )
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <AppContent />
    </React.Fragment>
  )
}

export default App
