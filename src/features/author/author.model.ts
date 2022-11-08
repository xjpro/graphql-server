import { find } from "lodash";

export type Author = {
  id: number;
  name: string;
};

const authors: Author[] = [{ id: 2, name: "JRR Tolkien" }];

export default {
  async findOne(id: number): Promise<Author> {
    return find(authors, { id });
  },
};
