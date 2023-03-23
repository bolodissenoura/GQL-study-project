import "reflect-metadata";
import path from "path";
require("dotenv").config({ path: ".env.local" });
import "./mongodb/connect";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { SurgeryResolver } from "./Resolvers/SurgeryResolver";
import { UserResolver } from "./Resolvers/UserResolver";
import { AuthResolver } from "./Resolvers/AuthResolver";
import AuthenticationAssurance from "./middlewares/AuthenticationAssurance";

import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";

async function main() {
  const schema = await buildSchema({
    resolvers: [SurgeryResolver, UserResolver, AuthResolver],
    emitSchemaFile: path.resolve(__dirname, "squema.gql"),
    authChecker: AuthenticationAssurance,
    validate: false,
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      const context = {
        req,
        token: req?.headers?.authorization,
      };
      return context;
    },
  });
  await server.start();
  server.applyMiddleware({ path: "/", app });
  httpServer.listen({ port: 4000 }, () =>
    console.log("Server running on port 4000")
  );
}

main();
