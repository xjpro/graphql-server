import { find } from "lodash";
import { Author } from "../author/author.model";

export type Book = {
  id: number;
  title: string;
  author: number | Author;
};

// for testing purposes only, replace with db
const books: Book[] = [
  { id: 1, title: "The Fellowship Of The Ring", author: 2 },
];

export default {
  async findOne(id: number): Promise<Book> {
    return find<Book>(books, (book) => book.id === id);
  },

  async findAll() {
    return books;
  },
};
