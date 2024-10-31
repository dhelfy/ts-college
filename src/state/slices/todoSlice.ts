import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../../types/types";

interface ITodoState {
    value: ITodo[]
}

const initialState: ITodoState = {
    value: [
        {
            title: 'Wash the dishes',
            isDone: false,
            id: 1
        },
        {
            title: 'Cook an omelette',
            isDone: true,
            id: 2
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

export default todoSlice.reducer
export const {} = todoSlice.actions