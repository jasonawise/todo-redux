import React from 'react'
import PropTypes from 'prop-types'
import { completeToDo } from '../actions'
import { connect } from 'react-redux'

const Task = ({task, handleCompleteToDo, index}) => {
   const handleComplete = ( ) => {
      handleCompleteToDo( index, task )
   }

   return (
      <>
         <li>
            {task}
         </li>
         <button
            className="ml-4 rounded shadow bg-red-300 hover:bg-red-700 border-none p-1 w-20"
            type="button"
            onClick={handleComplete}
            id={task}
         >
            {`complete`}
         </button>
      </>
   )
}

Task.propTypes = {
   task: PropTypes.string.isRequired,
   handleCompleteToDo: PropTypes.func,
   index: PropTypes.number
}

const mapDispatchToProps = ( dispatch ) => {
   return {
      handleCompleteToDo: ( index, task ) => {
         return dispatch( completeToDo( index, task ) )
      }
   }
}

export default connect( null, mapDispatchToProps )( Task )