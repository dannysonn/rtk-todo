import {createSlice} from "@reduxjs/toolkit";

export interface Todo {
    id: string,
    text: string,
}

export interface TodosState {
    todos: Todo[],
}

const initialState: TodosState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => {
                return todo.id != action.payload
            })
        },
    },
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
