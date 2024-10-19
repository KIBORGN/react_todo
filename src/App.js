
import './App.css';
import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';

function App() {
  const [activeTodos, setActiveTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);


  const addActiveTodo = text => {
    const newTodo = {
      id: Date.now(),
      text
    }

    setActiveTodos([newTodo, ...activeTodos])
  }

  const deleteActiveTodos = id => {
    setActiveTodos(activeTodos.filter(todo => todo.id !== id));
  }
  const deleteCompleteTodos = id => {
    setCompleteTodos(completeTodos.filter(todo => todo.id !== id));
  }

  return (
    
    <div className="App">
      <div className="wrapper">
        
        <h2>Active Task</h2>
        <Input addTodo={addActiveTodo}/>
        <List todos={activeTodos}
          deleteTodo = {deleteActiveTodos}
        />
      </div>
      <div className="wrapper">
        <h2>Completed Task</h2>
        <List todos={completeTodos}
          deleteTodo = {deleteCompleteTodos}
        />
      </div>
    </div>
  );
}

export default App;
