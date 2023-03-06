import { ApolloProvider } from "@apollo/client";
import "@/styles/globals.css";
import { Layout } from "@/components";
import { client } from "@/libs/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
