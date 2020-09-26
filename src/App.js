import React from 'react'
import { Provider } from 'react-redux'
import AddToDo from './AddToDo'
import configureStore from './store'
import TaskList from './TaskList'
import './tailwind.output.css'


function App() {
   return (
      <Provider store={configureStore()}>
         <div className="px-8">
            <h1>{`To Do Redux`}</h1>
            <AddToDo />
            <TaskList />
         </div>
      </Provider>
   )
}
export default App
