import React, { FC, useState } from 'react';
import { IBook } from './types/types';
import { CreateForm } from './components/CreateForm';
import { Book } from './components/Book';
import './styles.css';
import { bookSelector } from './state/selectors/bookSelector';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './state/store';
import { removeBook, addBook } from './state/slices/bookSlice';

export const App: FC = () => {
  let books = useSelector(bookSelector)
  let dispatch: AppDispatch = useDispatch()

  // можно вынести в отдельный компонент List
  let bookElems = books.map(function (book: IBook) {
    return <Book book={book} onClick={() => { dispatch(removeBook(book)) }} key={book.id} />
  })

  return (
    <>
      <CreateForm />
      {bookElems}
    </>
  )
};