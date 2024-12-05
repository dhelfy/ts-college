import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../../types/types";

interface ITodoState {
    todos: ITodo[],
    isLoading: boolean
}

const initialState: ITodoState = {
    todos: [],
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
        },
        completeTodo: (state, action: PayloadAction<ITodo>) => {
            let findTodo: number = state.todos.findIndex((todo) => {
                return todo.id === action.payload.id
            })

            if (findTodo !== -1) {
                state.todos[findTodo].completed = !action.payload.completed
            }
        }
    }
})

export default todoSlice.reducer

export const TodoActions = {...todoSlice.actions}