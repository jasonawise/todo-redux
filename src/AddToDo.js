import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addToDo } from './actions'

const AddToDo = ({ addToDo }) => {
   const [ newToDo, setNewToDo ] = useState( `` )

   const handleChange = ( e ) => {
      setNewToDo( e.target.value )
   }

   const handleAddToDo = ( ) => {
      //  @todo need to add validation if error
      if ( newToDo !== `` ) {
         addToDo( newToDo )
         setNewToDo( `` )
      }
   }

   return (
      <div className="flex flex-col container max-w-sm mx-auto">
         <label className="mb-3" htmlFor="toDo">{`TO DO`}</label>
         <input
            className="rounded-md shadow-md mb-6 h-6 p-3 bg-gray-100"
            type="text"
            value={newToDo}
            onChange={handleChange}
         />
         <button
            className="w-20 mx-auto shadow border-0 bg-orange-400 hover:bg-orange-600 hover:shadow-md rounded py-2 uppercase"
            onClick={handleAddToDo}
         >
            {`add`}
         </button>
      </div>
   )
}

AddToDo.propTypes = {
   addToDo: PropTypes.func.isRequired
}

const mapDispatchToProps = ( dispatch ) => {
   return {
      addToDo: ( toDo ) => {
         return dispatch( addToDo( toDo ) )
      }
   }
}

export default connect( null, mapDispatchToProps )( AddToDo )