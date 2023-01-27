import path from "path";
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "squema.gql"),
  });
  const server = new ApolloServer({
    schema,
  });
  const { url } = await server.listen();

  console.log(`🔥 Server running on ${url}`);
}

main();
