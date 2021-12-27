import React ,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';



function App() {
  
  const [todo , setTodo] = useState();
  
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const {todos} = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
    
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };
 


  return (
    <div className="App">
      <header className="App-header">
       <h2>Todo List (react-redux)</h2> 
       <form onSubmit={handleSubmit}>
         <input className='todo-input' placeholder='Enter Todo' onChange={(e)=> setTodo(e.target.value)}/>
         <button className='todo-input-btn' type="submit">Click me</button>
       </form >
       <ul className='all-todos'>
         {
           todos && todos.map((t) => (
            <li key={t.id} className='single-todo'>
            <span className='todo-text'>{t.todo}</span>
            <button className='li-btn' onClick={()=>removeHandler(t)}>Delete</button>
          </li>
           ))
         }
        
       </ul>

        
      </header>
     
    </div>
  );
}

export default App;
