import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => { 
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Task"/>
            <button>Add to List</button>
        </form>
    )

} 
export default ToDoForm;