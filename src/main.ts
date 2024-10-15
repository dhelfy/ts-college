import { BookManager } from "./BookManager";

BookManager.addBook({
  id: 1,
  title: "Book One",
  author: "Author One",
  year: 2020,
});

BookManager.addBook({
  id: 2,
  title: "Book Two",
  author: "Author Two",
  year: 2021,
});

console.log(BookManager.findBook(1));
console.log(BookManager.findBook(2));
BookManager.removeBook(1);
console.log(BookManager.findBook(1));