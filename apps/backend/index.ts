import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { SurgeryResolver } from "./Resolvers/SurgeryResolver";
import { UserResolver } from "./Resolvers/UserResolver";
import { AuthResolver } from "./Resolvers/AuthResolver";
import AuthenticationAssurance from "./middlewares/AuthenticationAssurance";

async function main() {
  const schema = await buildSchema({
    resolvers: [SurgeryResolver, UserResolver, AuthResolver],
    emitSchemaFile: path.resolve(__dirname, "squema.gql"),
    authChecker: AuthenticationAssurance,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req,
        token: req?.headers?.authorization,
      };
      return context;
    },
  });

  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log("Sever running on " + url);
}

main();
