import React, { FC } from "react";
import { IBook } from "../../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../../../state/slices/bookSlice";
import { CstmInput } from "../../../../shared/ui/CstmInput/CstmInput"
import { RootState } from "../../../../state/store";
import * as styles from "./CreateForm.module.css"
import { CstmButton } from "../../../../shared/ui/CstmButton/CstmButton";

export let CreateForm: FC = () => {
  const dispatch = useDispatch()
  const title = useSelector((state: RootState) => state.bookReducer.inputs['titleInput'])
  const author = useSelector((state: RootState) => state.bookReducer.inputs['authorInput'])
  const year = useSelector((state: RootState) => state.bookReducer.inputs['yearInput'])

  function createBook(): void {
    if (!title && !author && !year) {
      alert("Please fill all fields")
      return
    } if (isNaN(parseInt(year))) {
      alert("Year must be a number")
      return
    } else {
      let book: IBook = { title: title, author: author, year: parseInt(year), id: Date.now() }
      dispatch(addBook(book))
    }
  }

  return (
    <div className={styles.createForm}>
      <CstmInput placeholder="Title..." name='titleInput'/>
      <CstmInput placeholder="Author..." name='authorInput'/>
      <CstmInput placeholder="Year..." name='yearInput'/>

      <CstmButton color="white" onClick={createBook}>Create new book</CstmButton>
    </div>
  );
}