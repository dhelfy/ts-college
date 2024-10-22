import React, { FC, useState } from 'react';
import { iBook } from './types/types';
import { CreateForm } from './components/CreateForm';
import { Book } from './components/Book';
import './styles.css';

export const App: FC = () => {
  let [books, setBooks] = useState<iBook[]>([])

  let [title, setTitle] = useState<string>("")
  let [author, setAuthor] = useState<string>("")
  let [year, setYear] = useState<string>("")

  function createBook(): void {
    if (!title && !author && !year) {
      alert("Please fill all fields")
      return
    } if (isNaN(parseInt(year))) {
      alert("Year must be a number")
      return
    } else {
      let book: iBook = { title: title, author: author, year: parseInt(year), id: Date.now() };
      setBooks([...books, book])
      setTitle("")
      setAuthor("")
      setYear("")
    }
  }

  function removeBook(book: iBook): void {
    setBooks(books.filter(item => item.id !== book.id))
  }

  // можно вынести в отдельный компонент List
  let bookElems = books.map(function (book) {
    return <Book book={book} onClick={() => { removeBook(book) }} key={book.id} />
  })

  return (
    <>
      {/*100% можно как-то улучшить передачу полей*/}
      <CreateForm title={title} author={author} year={year} setTitle={setTitle} setAuthor={setAuthor} setYear={setYear} onClick={() => createBook()} />
      {bookElems}
    </>
  )
};