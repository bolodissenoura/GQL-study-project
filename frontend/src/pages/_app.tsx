import { AuthProvider } from "@/contexts/AuthContext";
import { client } from "@/lib/apollo";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}
