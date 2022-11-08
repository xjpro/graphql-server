import { assign, find, first, remove } from "lodash";
import { Book, UpdateBookInput } from "../../__generated__/types";
import { BookEntity } from "./book.entity";

const books: BookEntity[] = [
  { id: 1, title: "The Fellowship of the Ring", authorId: 44 },
  { id: 2, title: "The Two Towers", authorId: 44 },
  { id: 3, title: "The Return of the King", authorId: 44 },
  { id: 4, title: "1984", authorId: 45 },
];

export default {
  async findOne(id: number): Promise<Book> {
    return find(books, (book) => book.id === id);
  },
  async findAll(): Promise<Book[]> {
    return books;
  },
  async update(id: number, updateBookInput: UpdateBookInput): Promise<Book> {
    const book = await this.findOne(id);
    return assign(book, updateBookInput);
  },
  async remove(id: number): Promise<Book> {
    return first(remove(books, { id }));
  },
};
