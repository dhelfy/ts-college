import { FC } from "react";
import { selectAllBooks } from '../../state/selectors/bookSelector';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { IBook } from '../../types/types';
import { BookItem } from './ui/BookItem/BookItem';
import { removeBook } from '../../state/slices/bookSlice';
import { CreateForm } from './ui/CreateForm/CreateForm';
import React from 'react'

export const BooksPage: FC = () => {
    let books = useSelector(selectAllBooks)
    let dispatch: AppDispatch = useDispatch()

    // сюда сагу
    let bookElems = books.map(function (book: IBook) {
        return <BookItem book={book} onClick={() => { dispatch(removeBook(book)) }} key={book.id} />
    })

    return (
        <>
            <CreateForm />
            {bookElems}
        </>
    )
}