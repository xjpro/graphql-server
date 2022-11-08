import { find } from "lodash";
import { Author } from "../../__generated__/types";

// for testing purposes only, replace with db
type AuthorEntity = {
  id: number;
  name: string;
};

const authors: AuthorEntity[] = [{ id: 2, name: "JRR Tolkien" }];

export default {
  async findOne(id: number): Promise<Author> {
    return find(authors, { id });
  },
};
