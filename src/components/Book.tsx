import React, { FC } from "react";
import { iBook } from "../types/types";

interface BookProps {
  book: iBook;
  onClick: () => void
}

export let Book: FC<BookProps> = ({ book, onClick }) => {
    return (
      <div className="book">
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <button onClick={onClick}>Delete</button>
      </div>
    );
  }
  