import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import "./Task.css";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskCompleted, handleTaskDeletion }) => {
  const navigate = useNavigate();

  const handleTaskDetailClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.status ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskCompleted(task.id)}>
        {task.title}
      </div>
      <div>
        <button className="task-button-info" onClick={handleTaskDetailClick}>
          <CgInfo />
        </button>
        <button
          onClick={() => handleTaskDeletion(task.id)}
          className="task-button-remove"
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
