import { find } from "lodash";

export type Book = {
  title: string;
  // author: Autho
};

export default {
  books: [{ id: 1, title: "" }],

  async findOne(id: number) {
    return find(this.books, { id });
  },

  async findAll() {
    return this.books;
  },
};
