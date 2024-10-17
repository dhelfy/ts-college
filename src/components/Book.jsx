import React from "react";

export function Book({ title, author, year, onClick }) {
    return (
      <div className="book">
          <h1>{title}</h1>
          <p>{author}</p>
          <p>{year}</p>
          <button onClick={onClick}>Delete</button>
      </div>
    );
  }
  