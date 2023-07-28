import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter, UserProvider } from './providers'
import { Content, Footer, Header } from './components'
import { GameObserver } from './components/GameObserver'

const App: React.FC = () => {
  return (
    <UserProvider>
      <GameCenter>
        <GameObserver>
          <Global styles={globalStyles} />
          <Header />
          <Content />
          <Footer />
        </GameObserver>
      </GameCenter>
    </UserProvider>
  )
}

export default App
