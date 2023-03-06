import {configureStore} from "@reduxjs/toolkit";
import todoReducer, {Todo} from '../slices/todoSlice';

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
})

export type Store = {
    todos: {
        todos: Todo[]
    }
}
