import BookModel from "./book.model";
import AuthorModel from "../author/author.model";

export default {
  Query: {
    async book(parent, params) {
      return BookModel.findOne(params.id);
    },
    async books() {
      return BookModel.findAll();
    },
  },
  Book: {
    async author(parent) {
      return AuthorModel.findOne(parent.author as number);
    },
  },
};
