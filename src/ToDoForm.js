import React, { useState } from 'react';

const ToDoForm = (addTask) => { 
    const [ userInput, setUserInput ] = useState('');

    <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Task"/>

    const handleChange = (e) => {
        setUserInput(e.target.value)

    }

    const handleSubmit = (e) => { 
        e.preventDefault;
        addTask(userInput);
        setUserInput("");
    }

} 
export default ToDoForm;