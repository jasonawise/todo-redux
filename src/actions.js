import * as types from './actionTypes'

export const addToDo = ( toDo ) => {
   return {
      type: types.ADD_TO_DO,
      toDo: toDo
   }
}

export const completeToDo = ( index, toDo ) => {
   console.log( toDo )

   return {
      type: types.COMPLETE_TO_DO,
      index: index,
      toDo: toDo
   }
}