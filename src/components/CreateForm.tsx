import React, { FC, useState } from "react";
import { IBook } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../state/slices/bookSlice";
import { CstmInput } from "./CstmInput/CstmInput";
import { RootState } from "../state/store";

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
    <div className="create_form">
      <CstmInput placeholder="Title..." name='titleInput'/>
      <CstmInput placeholder="Author..." name='authorInput'/>
      <CstmInput placeholder="Year..." name='yearInput'/>

      <button onClick={() => { createBook() }} className="button_white">Create new book</button>
    </div>
  );
}