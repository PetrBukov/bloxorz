import React, { useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, Header, Navigation } from './components'
import { WelcomeScreen } from './components/WelcomeScreen/WelcomeScreen'

const App: React.FC = () => {
  const [loadingGameData, setLoadingGameData] = useState<boolean>(true)

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Let's just imagine that someday we will load game data from server
      // before User can start a game
      setLoadingGameData(false)
    }, 6000)

    return () => clearTimeout(timerId)
  }, [])

  return (
    <React.Fragment>
      <Global styles={globalStyles} />

      {loadingGameData ? (
        <WelcomeScreen />
      ) : (
        <GameCenter>
          <Header />
          <Content />
          <Footer />
          <Navigation />
        </GameCenter>
      )}
    </React.Fragment>
  )
}

export default App
