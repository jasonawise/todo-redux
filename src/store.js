import { configureStore } from '@reduxjs/toolkit'
import toDoApp from './reducer'

const reducerStore = () => {
   const store = configureStore(
      {
         reducer: toDoApp
      }
   )

   return store

}

export default reducerStore