import BookModel from "./BookModel";

export default {
  Query: {
    book: (id: number) => {
      return BookModel.findOne(id);
    },
    books: () => {
      return BookModel.findAll();
    },
  },
  Mutation: {

  }
};
