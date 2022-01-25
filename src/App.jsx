import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livro",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTask();
  }, []);

  const handleTaskCompleted = (taskId) => {
    const newStatus = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newStatus);
  };

  const handleTaskAddition = (taskTitle) => {
    if (taskTitle !== "") {
      const newTask = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          status: false,
        },
      ];
      setTasks(newTask);
    } else {
      return setTasks(tasks);
    }
  };

  const handleTaskDeletion = (taskId) => {
    const deleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deleteTask);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskCompleted={handleTaskCompleted}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
