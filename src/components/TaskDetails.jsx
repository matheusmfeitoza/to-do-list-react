import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackToMain = () => {
    navigate("/");
  };

  return (
    <>
      <div className="taskDetails-Button">
        <Button onClick={handleBackToMain}>Voltar</Button>
      </div>
      <div className="taskDetails-content">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima hic
          quae culpa sunt quibusdam ipsam!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
