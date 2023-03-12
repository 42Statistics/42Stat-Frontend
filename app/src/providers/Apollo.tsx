import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const Provider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
