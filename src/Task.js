import React from 'react'
import PropTypes from 'prop-types'

const Task = ({task}) => {
   const handleComplete = ( e ) => {
      console.log( e.target.id )
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

export default Task