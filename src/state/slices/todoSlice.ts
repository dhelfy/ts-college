import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

interface ITodoState {
    todos: ITodo[],
    isLoading: boolean
}

const initialState: ITodoState = {
    todos: [ ],
    isLoading: false
}

// saga update (all reducers)
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodos: (state) => {
            state.isLoading = true;
        },
        fetchTodosSuccess: (state, action) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        fetchTodosFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export default todoSlice.reducer
export const {fetchTodos, fetchTodosSuccess, fetchTodosFailure} = todoSlice.actions