import React from 'react'
import { Provider } from 'react-redux'
import AddToDo from './components/AddToDo'
import configureStore from './store'
import TaskList from './components/TaskList'
import './tailwind.output.css'
import Footer from './components/Footer'


function App() {
   return (
      <Provider store={configureStore()}>
         <div className="px-8">
            <h1>{`To Do Redux`}</h1>
            <AddToDo />
            <TaskList />
         </div>
         <Footer />
      </Provider>
   )
}
export default App
