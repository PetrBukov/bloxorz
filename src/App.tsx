import React from 'react'
import { Global } from '@emotion/react'
import 'normalize.css'

import { globalStyles } from './App.styles'
import { AppScreens } from './screens'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <AppScreens />
    </React.Fragment>
  )
}

export default App
