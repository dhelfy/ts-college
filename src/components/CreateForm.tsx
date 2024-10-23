import React, { FC, useState } from "react";
import { IBook } from "../types/types";

interface CreateFormProps {
  onSubmit: (book: IBook) => void
}

export let CreateForm: FC<CreateFormProps> = ({onSubmit}) => {
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
          let book: IBook = {title: title, author: author, year: parseInt(year), id: Date.now()}
          onSubmit({title: title, author: author, year: parseInt(year), id: Date.now()})
          setTitle("")
          setAuthor("")
          setYear("")
        }
      }

    return (
        <div className="create_form">
            <input
                onChange={(e) => setTitle(e.currentTarget.value)}
                value={title}
                placeholder="Title..."
            />
            <input
                onChange={(e) => setAuthor(e.currentTarget.value)}
                value={author}
                placeholder="Author..."
            />
            <input
                onChange={(e) => setYear(e.currentTarget.value)}
                value={year}
                placeholder="Year..."
            />

            <button onClick={() => {createBook()}} className="button_white">Create new book</button>
        </div>
    );
}