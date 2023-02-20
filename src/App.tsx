import React, {useRef, useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";

function App() {
    const initialTodos: string[] = [];
    const [todoText, setTodoText] = useState('');
    const [todos, setTodos] = useState(initialTodos);
    const addTodoInput = useRef<HTMLInputElement | null>(null)

    const handleTodoInput = (text: string) => {
        setTodoText(text);

    }

    const addTodo = (todo: string) => {
        setTodos([...todos, todo])

        addTodoInput.current!.value = '';
    }

    return (
        <div className="App">
            <label className='mt-10 container flex max-w-2xl mx-auto'>
                <input className='border-4 border-emerald-500 p-2 w-full' type="text" placeholder='Добавить тудушку' ref={addTodoInput} onChange={(e) => handleTodoInput(e.currentTarget.value)}/>
                <button className='p-2 bg-emerald-500 text-white w-1/4 border-4' onClick={() => addTodo(todoText)}>Добавить</button>
            </label>

            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}

export default App;
