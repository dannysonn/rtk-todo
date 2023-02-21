import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {Todo} from "./redux/slices/todoSlice";

function App() {
    const initialTodos: Todo[] = [];
    const [todoText, setTodoText] = useState('');
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (todo: string) => {
        if (todo.trim().length) {
            setTodos([...todos, {
                id: new Date(),
                text: todo,
            }])
        }
    }

    return (
        <div className="App">
            <label className='mt-10 container flex max-w-2xl mx-auto'>
                <input className='border-4 border-emerald-500 p-2 w-full' type="text" placeholder='Добавить тудушку' onChange={(e) => setTodoText(e.currentTarget.value)}/>
                <button className='p-2 bg-emerald-500 text-white w-1/4 border-4' onClick={() => addTodo(todoText)}>Добавить</button>
            </label>

            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
