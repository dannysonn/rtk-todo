import React from "react";
import {useDispatch} from "react-redux";
import {removeTodo} from "../../redux/slices/todoSlice";

interface TodoItemProps {
    text: string,
    id: string,
}

export function TodoItem({text, id}: TodoItemProps) {
    const dispatch = useDispatch();

    return (
        <li className='mt-4'>
            <label className='flex'>
                <input className='Todo-item mr-2' type='checkbox' value='todo'/>
                <span>{text}</span>
                <button className='ml-2 text-red-600' type='button' onClick={() => dispatch(removeTodo(id))}>&#10005;</button>
            </label>
        </li>
    );
}
