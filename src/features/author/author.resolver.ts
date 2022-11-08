import AuthorModel from "./author.model";

export default {
  Query: {
    async author(parent, params) {
      return AuthorModel.findOne(params.id);
    },
  },
};
