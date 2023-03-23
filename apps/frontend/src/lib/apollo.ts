import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import { parseCookies } from "nookies";

const { "token-surgery-plans": token }: any = parseCookies();

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    fetch,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
