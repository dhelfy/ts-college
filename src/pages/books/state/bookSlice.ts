import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/types';
import { PayloadAction } from '@reduxjs/toolkit';

interface IBookState {
    books: IBook[];
    inputs: Record<string, string>
}

const initialState: IBookState = {
    books: [],
    inputs: {
        titleInput: '',
        authorInput: '',
        yearInput: ''
    }
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            state.books = [...state.books, action.payload]
            console.log(state.books)
        },
        removeBook: (state, action: PayloadAction<IBook>) => {
            state.books = state.books.filter(item => item.id !== action.payload.id)
        },
        setInputValue: (state, action: PayloadAction<{name: string, value: string}>) => {
            state.inputs[action.payload.name] = action.payload.value
        }
    },
});


export const {addBook, removeBook, setInputValue} = bookSlice.actions

export default bookSlice.reducer