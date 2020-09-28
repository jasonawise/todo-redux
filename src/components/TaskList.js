import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Task from './Task'

const TaskList = ({ tasks }) => {
   return (
      <div className="flex flex-col">
         <h2>{`Tasks`}</h2>
         {
            tasks.length === 0 &&
            <ul className="list-none">
               <li>{`No Tasks Added Yet`}</li>
            </ul>
         }
         <ul className="list-none">
            {tasks.map( task => {
               return (
                  <Task task={task} key={tasks.indexOf( task )} index={tasks.indexOf( task )} />
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