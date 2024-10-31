import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './slices/bookSlice'
import userReducer from './slices/userSlice'
import todoReducer from './slices/todoSlice'

export const store = configureStore({
    reducer: {
        bookReducer,
        userReducer,
        todoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch