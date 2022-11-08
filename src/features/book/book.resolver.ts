import BookModel from "./book.model";
import AuthorModel from "../author/author.model";
import { Author, Book } from "../../__generated__/types";

export default {
  Query: {
    async book(parent, params): Promise<Book> {
      return BookModel.findOne(params.id);
    },
    async books(): Promise<Book[]> {
      return BookModel.findAll();
    },
  },
  Book: {
    async author(book): Promise<Author> {
      return AuthorModel.findOne(book.authorId);
    },
  },
  Mutation: {
    async updateBook(_, params): Promise<Book> {
      const { id, updateBookInput } = params;
      return BookModel.update(id, updateBookInput);
    },
  },
};
