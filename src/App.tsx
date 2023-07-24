import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { GameCenter } from './providers'
import { Content, Footer, Header, VictoryModal } from './components'

const App: React.FC = () => {
  return (
    <GameCenter>
      <Global styles={globalStyles} />
      <Header />
      <Content />
      <Footer />
      <VictoryModal />
    </GameCenter>
  )
}

export default App
