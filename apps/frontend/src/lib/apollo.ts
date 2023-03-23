import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";
import { parseCookies } from "nookies";
import enviroment from "../../enviroments";

const { "token-surgery-plans": token }: any = parseCookies();

export const client = new ApolloClient({
  link: new HttpLink({
    uri: enviroment.BASE_URL,
    fetch,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});
