import React from "react";
import {TodoItem} from "../TodoItem/TodoItem";
import {Todo} from "../../redux/slices/todoSlice";
import {useSelector} from "react-redux";
import {Store} from "../../redux/store/store";


export function TodoList() {
    const todos: Todo[] = useSelector((state: Store) => state.todos.todos);
    let todosItems;


    if (todos.length) {
        todosItems = todos.map((todoshka: Todo) =>
            <TodoItem key={todoshka.id} text={todoshka.text} id={todoshka.id}/>
        );
    }

    return (
        <ul className='container flex flex-col max-w-2xl mx-auto text-left'>
            {todosItems}
        </ul>
    );
}
