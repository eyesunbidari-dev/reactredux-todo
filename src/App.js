import React ,{ useState } from 'react';
import './App.css';



function App() {

  return (
    <div className="App">
      <header className="App-header">
       <h2>Todo List (react-redux)</h2> 
       <form>
         <input className='todo-input' placeholder='Enter Todo'/>
         <button className='todo-input-btn' type='submit'>Click me</button>
       </form>
       <ul className='all-todos'>
         <li className='single-todo'>
           <span className='todo-text'>First Todo</span>
           <button className='li-btn'>Delete</button>
         </li>
       </ul>

        
      </header>
     
    </div>
  );
}

export default App;
