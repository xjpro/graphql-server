import BookModel from "./book.model";

export default {
  Query: {
    book: (id: number) => {
      return BookModel.findOne(id);
    },
    books: () => {
      return BookModel.findAll();
    },
  },
};
