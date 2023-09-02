import './App.css';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  
  
  useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then(data => {
       
        setTodos([data]);
      })
    }, []);

  
    const addTodo = title => {
    const id = todos[todos.length -1].id + 1;
    setTodos([...todos, { id, title, completed: false}])
  }

  const deleteTodo = id => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    )
  }



  const toggleCompleted = id => {
    setTodos(
      todos.map( todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }
  

  return (
    <div className="container">
      <h1>Todo Appt</h1>
     
      <AddTodo
      addTodo={ addTodo }/>

      <div className="todos mt-20">
        <TodoList 
        todos={ todos }
        setTodos={ setTodos }
        toggleCompleted={ toggleCompleted }
        deleteTodo={ deleteTodo }
        />
      </div>
    
    </div>
  );
}

export default App;

