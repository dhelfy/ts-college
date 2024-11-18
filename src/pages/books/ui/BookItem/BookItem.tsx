import React, { FC } from "react";
import { IBook } from "../../../../types/types";
import * as styles from "./BookItem.module.css"

interface BookItemProps {
  book: IBook;
  onClick: () => void;
}

export let BookItem: FC<BookItemProps> = ({ book, onClick }) => {
    return (
      <div className={styles.book}>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <p>{book.year}</p>
          <button onClick={onClick}>Delete</button>
      </div>
    );
  }
  