import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from 'uuid'
import Task from "./components/Task";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      status: false,
    },
    {
      id: "2",
      title: "Ler livro",
      status: true,
    },
  ]);

  const handleTaskCompleted = (taskId) =>{

    const newStatus = tasks.map((task) => {
      if(task.id === taskId) return {...task, status:!task.status}

      return task;
    })
    setTasks(newStatus)

  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks,{
      title: taskTitle,
      id:uuidv4(),
      status: false
    }]
    setTasks(newTask)
  }

  const handleTaskDeletion = (taskId) =>{
    const deleteTask = tasks.filter(task => task.id !== taskId)
    setTasks(deleteTask)
  }

  return (
    <>
      <div className="container">
        <AddTask  handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskCompleted={handleTaskCompleted} handleTaskDeletion={handleTaskDeletion} />
      </div>
      
    </>
  );
};

export default App;
