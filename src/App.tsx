import React from 'react'
import { Global } from '@emotion/react'

import { MainLayout, globalStyles } from './App.styles'

const App: React.FC = () => {
  return (
    <MainLayout>
      <Global styles={globalStyles} />
      Hello Bloxorz
    </MainLayout>
  )
}

export default App
