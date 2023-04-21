import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache({
    typePolicies: {
      Home: {
        merge: true,
      },
      Total: {
        merge: true,
      },
      PersonalGeneral: {
        merge: true,
      },
      PersonalEval: {
        merge: true,
      },
    },
  }),
});

const Provider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
