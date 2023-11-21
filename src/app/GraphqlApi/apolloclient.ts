import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = (uri: string) => {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
