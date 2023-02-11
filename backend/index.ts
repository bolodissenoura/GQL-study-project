import path from "path";
import "reflect-metadata";
require("dotenv").config({ path: ".env.local" });
import "./src/mongodb/connect";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver, ClientResolver } from "./src/resolvers";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver, ClientResolver],
    emitSchemaFile: path.resolve(__dirname, "squema.gql"),
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await server.listen();

  console.log(`🔥 Server running on ${url}`);
}

main();
