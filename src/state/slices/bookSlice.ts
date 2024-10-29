import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';

interface IBookState {
    books: IBook[]
}

const initialState: IBookState = {
    books: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            state.books = [...state.books, action.payload]
        },
        removeBook: (state) => {

        }
    },
});

export const BooksActions = bookSlice.actions

export default bookSlice.reducer