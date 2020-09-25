import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Task from './Task'

const TaskList = ({ tasks }) => {
   return (
      <div>
         <h2>{`Tasks`}</h2>
         {
            tasks.length === 0 &&
            <ul>
               <li>{`No Tasks Added Yet`}</li>
            </ul>
         }
         <ul>
            {tasks.map( task => {
               return (
                  <Task task={task} key={task} />
               )
            })
            }
         </ul>
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