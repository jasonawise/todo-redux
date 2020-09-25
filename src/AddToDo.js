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
      <div>
         <label htmlFor="toDo">{`TO DO`}</label>
         <input type="text" value={newToDo} onChange={handleChange} />
         <button onClick={handleAddToDo}>{`add`}</button>
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