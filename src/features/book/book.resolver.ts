import BookModel from "./book.model";
import AuthorModel from "../author/author.model";

export default {
  Query: {
    async book(parent, params) {
      const book = await BookModel.findOne(params.id);
      book.author = await AuthorModel.findOne(book.author as number);
      return book;
    },
    async books() {
      return BookModel.findAll();
    },
  },
};
