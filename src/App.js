import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

function App() {
   return (
      <Provider store={configureStore()}>
         <h1>{`Hello World`}</h1>
      </Provider>
   )
}

export default App
