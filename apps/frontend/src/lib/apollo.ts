import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import { parseCookies } from "nookies";

const { "token-surgery-plans": token } = parseCookies();

const isServer = typeof window === "undefined";

export const client = new ApolloClient({
  ssrMode: isServer,
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_REACT_APP_BASE_URL,
    fetch,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
