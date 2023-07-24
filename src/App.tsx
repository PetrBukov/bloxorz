import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, FailureModal, Footer, Nav, VictoryModal } from './components'
import { PausedModal } from './components/PausedModal'

const App: React.FC = () => {
  return (
    <GameCenter>
      <Global styles={globalStyles} />
      <Nav />
      <Content />
      <Footer />
      <VictoryModal />
      <FailureModal />
      <PausedModal />
    </GameCenter>
  )
}

export default App
