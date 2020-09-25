import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const TaskList = ({ tasks }) => {
   return (
      <div>
         <h2>{`Tasks`}</h2>
         {
            tasks.length === 0 &&
           <p>{`No Tasks`}</p>
         }
         {
            tasks.map( task => {
               return (
                  <li>{task}</li>
               )
            })
         }
      </div>
   )
}

TaskList.propTypes = {
   tasks: PropTypes.array.isRequired
}

const mapStateToProps = ( state ) => {
   return {
      tasks: state.toDos
   }
}

export default connect( mapStateToProps )( TaskList )