import AuthorModel from "./author.model";

export default {
  Query: {
    async author(parent, params) {
      const { id } = params;
      return AuthorModel.findOne(id);
    },
  },
};
