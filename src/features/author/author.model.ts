import { find } from "lodash";

export type Author = {
  name: string;
  // author: Autho
};

export default {
  authors: [{ id: 2, name: "JRR Tolkien" }],

  async findOne(id: number): Promise<Author> {
    return find(this.authors, { id });
  },
};
