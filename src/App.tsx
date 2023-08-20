import React, { useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, Header, Navigation } from './components'
import { WelcomeScreen } from './components/WelcomeScreen/WelcomeScreen'

const AppContent: React.FC = () => {
  const [loadingGameData, setLoadingGameData] = useState<boolean>(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Let's just imagine that someday we will load game data from server
      // before User can start a game
      setLoadingGameData(false)
    }, 3000)

    return () => clearTimeout(timeout)
  }, [])

  if (loadingGameData) {
    return <WelcomeScreen />
  }

  return (
    <GameCenter>
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
