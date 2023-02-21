import React from "react";
import {TodoItem} from "../TodoItem/TodoItem";
import {Todo} from "../../redux/slices/todoSlice";

interface TodoListProps {
    todos: Todo[],
    setTodos: any,
}

export function TodoList({todos, setTodos}: TodoListProps) {
    let todosItems = todos.map((todoshka: Todo) =>
        <TodoItem key={todoshka.toString()} todoshka={todoshka.text} id={todoshka.id} todos={todos} setTodos={setTodos}/>
    );

    return (
        <ul className='container flex flex-col max-w-2xl mx-auto text-left'>
            {todosItems}
        </ul>
    );
}
