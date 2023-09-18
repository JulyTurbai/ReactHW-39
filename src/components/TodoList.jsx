import TodoItem from "./TodoItem";
import { useContext } from 'react';
import MyContext from '../Context/MyContext';

const TodoList = ({ toggleCompleted, deleteTodo, setTodos }) => {
    const  todos  = useContext(MyContext);
    const { id } = useContext(MyContext);
    
    return (
        <>
            <h2>Todo list</h2>
            <ul className='todo-list mt-20'>

                {
                    todos.map( (todo, index) =>  
                    <TodoItem 
                    key={ id }
                    todo={ todo } 
                    index={ index }
                    toggleCompleted={ toggleCompleted }
                    deleteTodo={ deleteTodo }
                    setTodos={ setTodos }
                    />
                    )
                }
            </ul>
        </>
    );
};

export default TodoList;