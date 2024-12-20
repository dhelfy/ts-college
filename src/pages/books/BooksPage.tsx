import { FC } from "react";
import { selectAllBooks } from './state/bookSelector';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { IBook } from '../../types/types';
import { BookItem } from './ui/BookItem/BookItem';
import { removeBook } from './state/bookSlice';
import { CreateForm } from './ui/CreateForm/CreateForm';
import React from 'react'
import { ListComponent } from "../../shared/ui/ListComponent/ListComponent";

export const BooksPage: FC = () => {
    let books: IBook[] = useSelector(selectAllBooks)
    let dispatch: AppDispatch = useDispatch()

    const onClickHandler = (book: IBook) => { dispatch(removeBook(book)) }

    return (
        <>
            <CreateForm />
            <ListComponent 
                items={books} 
                renderItem={(book) => <BookItem book={book} onClick={() => onClickHandler(book)} key={book.id} />} 
            />
        </>
    )
}