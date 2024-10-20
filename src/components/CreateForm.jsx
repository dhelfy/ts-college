import React from "react";

export function CreateForm({setYear, setAuthor, setTitle, onClick, title, author, year}) {
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

            <button onClick={onClick} className="button_white">Create new book</button>
        </div>
    );
}