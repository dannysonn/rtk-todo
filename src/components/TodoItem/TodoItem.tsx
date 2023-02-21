import React from "react";
import {Todo} from "../../redux/slices/todoSlice";

interface TodoItemProps {
    todoshka: string,
    id: Date,
    todos: Todo[],
    setTodos: any
}

export function TodoItem({todoshka, id, todos, setTodos}: TodoItemProps) {
    const removeTodo = () => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <li className='mt-4'>
            <label className='flex'>
                <input className='Todo-item mr-2' type='checkbox' value='todo'/>
                <span>{todoshka}</span>
                <button className='ml-2 text-red-600' type='button' onClick={removeTodo}>&#10005;</button>
            </label>
        </li>
    );
}
