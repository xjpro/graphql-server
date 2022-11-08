import BookModel from "./book.model";
import AuthorModel from "../author/author.model";
import { Author, Book } from "../../__generated__/types";

export default {
  Book: {
    async author(book): Promise<Author> {
      // todo should make use of https://github.com/graphql/dataloader
      return AuthorModel.findOne(book.authorId);
    },
  },
  Query: {
    async book(parent, params): Promise<Book> {
      return BookModel.findOne(params.id);
    },
    async books(): Promise<Book[]> {
      return BookModel.findAll();
    },
  },
  Mutation: {
    async updateBook(_, params): Promise<Book> {
      const { id, updateBookInput } = params;
      return BookModel.update(id, updateBookInput);
    },
    async removeBook(_, params): Promise<Book> {
      return BookModel.remove(params.id);
    },
  },
};
