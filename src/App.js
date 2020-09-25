import React from 'react'
import { Provider } from 'react-redux'
import AddToDo from './AddToDo'
import configureStore from './store'
import TaskList from './TaskList'

function App() {
   return (
      <Provider store={configureStore()}>
         <h1>{`Hello World`}</h1>
         <AddToDo />
         <TaskList />
      </Provider>
   )
}
export default App
