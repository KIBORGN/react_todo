
import './App.css';
import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = text => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    
    <div className="App">
      <div className="wrapper">
        
        <h2>Active Task</h2>
        <Input addTodo={addTodo}/>
        <List todos={activeTodos}
          toggleComplete={toggleComplete}
          deleteTodo = {deleteTodo}
        />
      </div>
      <div className="wrapper">
        <h2>Completed Task</h2>
        <List todos={completedTodos}
          toggleComplete={toggleComplete} 
          deleteTodo = {deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
