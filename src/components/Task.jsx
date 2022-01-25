import React from 'react';
import {CgClose} from 'react-icons/cg'
import './Task.css';

const Task = ({task, handleTaskCompleted, handleTaskDeletion}) => {
  return(
      <div  className='task-container' style= {task.status ? {borderLeft: '6px solid chartreuse'}: {}}>
          <div className='task-title' onClick={()=> handleTaskCompleted(task.id)}>
            {task.title}
          </div>
          <div>
            <button onClick={() => handleTaskDeletion(task.id)} className='task-button-remove'><CgClose/></button>
          </div>

      </div>
  )
};

export default Task;
