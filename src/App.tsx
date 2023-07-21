import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { Main, globalStyles } from './App.styles'
import { Footer } from './components/Footer'
import { GameBoard } from './components/GameBoard'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Main>
        <GameBoard />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App
