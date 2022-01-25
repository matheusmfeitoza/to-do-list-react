import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputTask, setInputTask] = useState('');

    function handleInputChange({target}){
        setInputTask(target.value)
    }

    const handleClick = () =>{
        handleTaskAddition(inputTask)
        setInputTask("")
    }

  return (
      <div className='addTask-container'>
          <input className='addTask-input' onChange={handleInputChange} value={inputTask} type="text" />
          <div className="addTask-button">
          <Button onClick={handleClick}>Adicionar</Button>
          </div>
      </div>
  );
};

export default AddTask;
