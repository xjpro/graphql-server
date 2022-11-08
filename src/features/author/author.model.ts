import { find } from "lodash";
import { Author } from "../../__generated__/types";
import { AuthorEntity } from "./author.entity";

const authors: AuthorEntity[] = [
  { id: 44, name: "J.R.R. Tolkien" },
  { id: 45, name: "George Orwell" },
];

export default {
  async findOne(id: number): Promise<Author> {
    return find(authors, { id });
  },
};
