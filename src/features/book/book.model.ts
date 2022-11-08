import { find } from "lodash";
import { Book } from "../../__generated__/types";

// Simulated db, using memory for now...
type BookEntity = {
  id: number;
  title: string;
  authorId: number;
};

const books: BookEntity[] = [
  { id: 1, title: "The Fellowship Of The Ring", authorId: 2 },
];

export default {
  async findOne(id: number): Promise<Book> {
    return find(books, (book) => book.id === id);
  },
  async findAll(): Promise<Book[]> {
    return books;
  },
};
