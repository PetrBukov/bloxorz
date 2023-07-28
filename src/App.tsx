import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, Header } from './components'
import { GameObserver } from './components/GameObserver'

const App: React.FC = () => {
  return (
    <GameCenter>
      <GameObserver>
        <Global styles={globalStyles} />
        <Header />
        <Content />
        <Footer />
      </GameObserver>
    </GameCenter>
  )
}

export default App
