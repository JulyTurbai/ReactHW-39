import './App.css';
import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import MyContext from './Context/MyContext';


function App() {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn JS', completed: false},
    {id: 2, title: 'Learn HTML', completed: false},
    {id: 3, title: 'Learn CSS', completed: true},
    {id: 4, title: 'Learn React', completed: false}
  ]);
  

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
      <MyContext.Provider value={ todos }>
      <TodoList 
        setTodos={ setTodos }
        toggleCompleted={ toggleCompleted }
        deleteTodo={ deleteTodo }
        />
      </MyContext.Provider>
      </div>
    
    </div>
  );
}

export default App;

