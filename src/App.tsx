import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, GameStatusTitle, Header } from './components'
import { GameObserver } from './components/GameObserver'

const App: React.FC = () => {
  return (
    <GameCenter>
      <GameObserver>
        <Global styles={globalStyles} />
        <Header />
        <Content />
        <Footer />
        <GameStatusTitle />
      </GameObserver>
    </GameCenter>
  )
}

export default App
