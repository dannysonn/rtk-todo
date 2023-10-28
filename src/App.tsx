import React, {useRef, useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {Todo} from "./redux/slices/todoSlice";
import {useDispatch} from "react-redux";
import {addTodo} from "./redux/slices/todoSlice";

function App() {
    const initialTodos: Todo[] = [];
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = () => {
        dispatch(addTodo(todoText));
        setTodoText('')
    }

    return (
        <div className="App">
            <label className='mt-10 container flex max-w-2xl mx-auto'>
                <input className='border-4 border-emerald-500 p-2 w-full' type="text" placeholder='Добавить тудушку' onChange={(e) => setTodoText(e.currentTarget.value)} value={todoText}/>
                <button className='p-2 bg-emerald-500 text-white w-1/4 border-4' onClick={addTodoHandler}>Добавить</button>
            </label>

            <TodoList />
        </div>
    );
}

export default App;
