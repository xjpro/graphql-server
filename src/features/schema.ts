import path from "path";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import {makeExecutableSchema} from "@graphql-tools/schema";

const typeDefsArray = loadFilesSync(path.join(__dirname, "./**"), {
  extensions: ["gql"],
});

const resolversArray = loadFilesSync(
  path.join(__dirname, "./**/*.resolver.ts")
);

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefsArray),
  resolvers: mergeResolvers(resolversArray),
});

export default schema;
