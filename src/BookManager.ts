import { Book } from "./interfaces";
import { books_arr } from "./data";

let books = books_arr

export class BookManager {
  static addBook(book: Book): void {
    books.push(book);
  }

  static removeBook(id: number): void {
    books = books.filter((book) => book.id !== id);
  }

  static findBook(id: number): Book | string {
    let found_book = books.find((book) => book.id === id);
    return found_book
      ? found_book
      : "I cant find the book, that you are looking for :(";
  }
}
