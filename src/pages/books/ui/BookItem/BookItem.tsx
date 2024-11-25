import React, { FC } from "react";
import { IBook } from "../../../../types/types";
import * as styles from "./BookItem.module.css"
import { CstmButton } from "../../../../shared/ui/CstmButton/CstmButton";

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
          <CstmButton color="black" onClick={onClick}>Delete</CstmButton>
      </div>
    );
  }
  