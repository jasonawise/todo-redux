import React from 'react'
import { Provider } from 'react-redux'
import AddToDo from './AddToDo'
import configureStore from './store'
import TaskList from './TaskList'

function App() {
   return (
      <Provider store={configureStore()}>
         <h1>{`To Do Redux`}</h1>
         <AddToDo />
         <TaskList />
      </Provider>
   )
}
export default App
