
import './App.css';
import { useState } from 'react';
import Input from './Components/Input';
import List from './Components/List';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodo = {
      text
    }

    setTodos([newTodo, ...todos])
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>TodoList</h1>
        <Input addTodo={addTodo}/>
        <List todos={todos}/>
      </div>
    </div>
  );
}

export default App;
