import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskCompleted, handleTaskDeletion}) => {
  return (
  <>
      {tasks.map((task) => <Task  task={task} key={task.id} handleTaskCompleted={handleTaskCompleted} handleTaskDeletion= {handleTaskDeletion}/>)}
  </>
  )
};

export default Tasks;
