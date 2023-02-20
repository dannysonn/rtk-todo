import React from "react";
import {TodoItem} from "../TodoItem/TodoItem";

interface TodoListProps {
    todos: string[],
    setTodos: any,
}

export function TodoList({todos, setTodos}: TodoListProps) {
    let todosItems = todos.map((todoshka: string) =>
        <TodoItem key={todoshka.toString()} todoshka={todoshka} id={todoshka.toString()} todos={todos} setTodos={setTodos}/>
    );

    return (
        <ul className='container flex flex-col max-w-2xl mx-auto text-left'>
            {todosItems}
        </ul>
    );
}
