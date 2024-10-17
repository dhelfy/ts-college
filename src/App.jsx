import React from 'react';
import { useState } from "react";
import { Book } from './components/Book.jsx'
import styles from "./styles.css"
import { CreateForm } from './components/CreateForm.jsx';

export function App() {
  let [books, setBooks] = useState([]);

  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [year, setYear] = useState("");

  function createBook() {
    if (title && author && year) {
      let book = { title: title, author: author, year: year, id: Date.now() };
      setBooks([...books, book]);
      setTitle("");
      setAuthor("");
      setYear("");
    } else {
      alert('Fill all fields')
    }
  }

  function removeBook(book) {
    setBooks(books.filter(item => item.id !== book.id))
  }

  let booksElems = books.map(function (book) {
    return <Book
      title={book.title} author={book.author} year={book.year}
      key={book.id} className="book"
      onClick={() => {removeBook(book)}}
    />;
  });

  return (
    <>
      <CreateForm onClick={createBook} 
        title={title} author={author} 
        year={year} setTitle={setTitle} 
        setAuthor={setAuthor} setYear={setYear} 
      />
      <div>{booksElems}</div>
    </>
  );
}
