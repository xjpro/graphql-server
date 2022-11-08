import AuthorModel from "./author.model";
import {Author} from "../../__generated__/types";

export default {
  Query: {
    async author(parent, params): Promise<Author> {
      return AuthorModel.findOne(params.id);
    },
  },
};
