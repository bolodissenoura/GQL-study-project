import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { SurgeryResolver } from "./Resolvers/SurgeryResolver";

async function main() {
  const schema = await buildSchema({
    resolvers: [SurgeryResolver],
    emitSchemaFile: path.resolve(__dirname, "squema.gql"),
    validate: false,
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();
  console.log("Sever running on " + url);
}

main();
