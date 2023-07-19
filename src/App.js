import React, { useState } from 'react';
import data from "./data.json"
import './App.css';
import { Header } from './Header';


function App() {
  const  [ toDoList,setToDoList ] = useState(data);
  
  return (
    <div className="App">
      <Header pageName= "To-Done!" slogan= "Track your progress!"/>
    </div>
  );
}

export default App;
