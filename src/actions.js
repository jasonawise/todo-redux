import * as types from './actionTypes'

export const addToDo = ( toDo ) => {
   return {
      type: types.ADD_TO_DO,
      toDo: toDo
   }
}