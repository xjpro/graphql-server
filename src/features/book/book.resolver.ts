import BookModel from "./book.model";
import AuthorModel from "../author/author.model";

export default {
  Query: {
    async book(parent, params) {
      const book = await BookModel.findOne(params.id);
      const author = await AuthorModel.findOne(book.author as number);
      return {
        ...book,
        author,
      };
    },
    async books() {
      return BookModel.findAll();
    },
  },
};
