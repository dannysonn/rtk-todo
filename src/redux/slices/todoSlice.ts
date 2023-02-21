import {createSlice} from "@reduxjs/toolkit";

export interface Todo {
    id: Date,
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
            console.log(state)
            console.log(action)

            state.todos.push({
                id: new Date(),
                text: action.payload.text,
            })
        },
        removeTodo(state, action) {

        },
    },
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
