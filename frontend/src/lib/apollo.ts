import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000", fetch }),
  cache: new InMemoryCache(),
});
