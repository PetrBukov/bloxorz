import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, GameStatusTitle, Nav, VictoryModal } from './components'
import { PausedModal } from './components/PausedModal'
import { GameObserver } from './components/GameObserver'

const App: React.FC = () => {
  return (
    <GameCenter>
      <GameObserver>
        <Global styles={globalStyles} />
        <Nav />
        <Content />
        <Footer />
        <VictoryModal />
        <PausedModal />
        <GameStatusTitle />
      </GameObserver>
    </GameCenter>
  )
}

export default App
