import update from 'immutability-helper'

const INITAL_STATE = {
   toDos: [ ],
   completed: [ ]
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
   case `toDoApp/COMPLETE_TO_DO`: {
      return update( state,
         {
            toDos: {
               $splice: [ [ action.index, 1 ] ]
            },
            completed: {
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