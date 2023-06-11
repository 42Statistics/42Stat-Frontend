import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
//   cache: new InMemoryCache({
//     typePolicies: {
//       Home: {
//         merge: true,
//       },
//       Total: {
//         merge: true,
//       },
//       PersonalGeneral: {
//         merge: true,
//       },
//       PersonalEval: {
//         merge: true,
//       },
//     },
//   }),
// });

/**
 * @description
 * 쿼리 바뀌었을때 이부분 안건드리면 기존에 있던캐시정보에 바뀐 쿼리정보 병합하려고해서 에러발생
 * 그래서 쿼리 타입바뀌면 여기 fields에 그 쿼리 써주고 merge : false 옵션줘서
 * 기존 캐시 날리고 다시 true 줘야 에러가 나지 않음
 * @goto
 *  https://go.apollo.dev/c/merging-non-normalized-objects
 *  https://go.apollo.dev/c/generating-unique-identifiers
 */
const client = new ApolloClient({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getHomeEval: {
            merge: true,
          },
          getHomeUser: {
            merge: true,
          },
          getHomeCoalition: {
            merge: true,
          },
          getHomeTeam: {
            merge: true,
          },
          getPersonalGeneralPage: {
            merge: true,
          },
          getPersonalEvalPage: {
            merge: true,
          },
        },
      },
    },
  }),
});

const Provider = ({ children }: React.PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
