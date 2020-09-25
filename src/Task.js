import React from 'react'
import PropTypes from 'prop-types'
import { completeToDo } from './actions'
import { connect } from 'react-redux'

const Task = ({task, handleCompleteToDo, index}) => {
   const handleComplete = ( ) => {
      handleCompleteToDo( index, task )
   }

   return (
      <li>
         {task}
         <button
            type="button"
            onClick={handleComplete}
            id={task}
         >
            {`complete`}
         </button>
      </li>

   )
}

Task.propTypes = {
   task: PropTypes.string.isRequired
}

const mapDispatchToProps = ( dispatch ) => {
   return {
      handleCompleteToDo: ( index, task ) => {
         return dispatch( completeToDo( index, task ) )
      }
   }
}

export default connect( null, mapDispatchToProps )( Task )