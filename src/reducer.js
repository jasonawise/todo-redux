import update from 'immutability-helper'

const INITAL_STATE = {
   toDos: [ ]
}

const toDoApp = ( state = INITAL_STATE, action ) => {
   switch ( action.type ) {
   case `toDoApp/ADD_TO_DO`: {
      return update( state,
         {
            toDos: {
               $push: [ action.toDo ]
            }
         })
   }
   default: {
      return state
   }
   }
}

export default toDoApp