import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import bookReducer from './slices/bookSlice'
import userReducer from './slices/userSlice'
import todoReducer from './slices/todoSlice'
import rootSaga from "../sagas/rootSaga";


// saga update
const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        bookReducer,
        userReducer,
        todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
})

// saga update
saga.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch