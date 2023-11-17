import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = (endpoint: any) => {
  return new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;