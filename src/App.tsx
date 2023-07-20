import React from 'react'
import { Global } from '@emotion/react'

import { Main, globalStyles } from './App.styles'
import { Footer } from './components/Footer'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Main />
      <Footer />
    </React.Fragment>
  )
}

export default App
