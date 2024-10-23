import React, { FC, useState } from 'react';
import { IBook } from './types/types';
import { CreateForm } from './components/CreateForm';
import { Book } from './components/Book';
import './styles.css';

export const App: FC = () => {
  let [books, setBooks] = useState<IBook[]>([])

  function removeBook(book: IBook): void {
    setBooks(books.filter(item => item.id !== book.id))
  }

  // можно вынести в отдельный компонент List
  let bookElems = books.map(function (book: IBook) {
    return <Book book={book} onClick={() => { removeBook(book) }} key={book.id} />
  })

  return (
    <>
      <CreateForm
        onSubmit={(book: IBook) => setBooks([...books, book])}
      />
      {bookElems}
    </>
  )
};