import { getNewAccessToken } from '@/services/auth/getNewAccessToken';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ROUTES } from '@routes/ROUTES';
import { getAccessToken } from '@utils/storage/accessToken';
import { clearStorage } from '@utils/storage/clearStorage';
import { getRefreshToken } from '@utils/storage/refreshToken';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
});

const authMiddleWare = new ApolloLink((operation, forward) => {
  if (operation.operationName === 'getLanding') {
    return forward(operation);
  }
  const accessToken = getAccessToken();
  if (accessToken === null) {
    return forward(operation);
  }
  operation.setContext({
    headers: {
      ...operation.getContext().headers,
      authorization: `Bearer ${accessToken}`,
    },
  });
  return forward(operation);
});

const refreshLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    // forEach 내부에서 async await 사용하면 안됨 -> for ~ of
    for (const { extensions } of graphQLErrors) {
      if (extensions?.status === 401) {
        return fromPromise(getNewAccessToken(getRefreshToken() ?? '')).flatMap(
          (accessToken) => {
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                authorization: `Bearer ${accessToken}`,
              },
            });
            return forward(operation);
          },
        );
      }
    }
  }
});

const resetLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions?.status === 400) {
        clearStorage();
        window.location.href = ROUTES.ROOT;
      }
    });
  }
});

/**
 * @description
 * 쿼리 바뀌었을때 이부분 안건드리면 기존에 있던캐시정보에 바뀐 쿼리정보 병합하려고해서 에러발생
 * 그래서 쿼리 타입바뀌면 여기 fields에 그 쿼리 써주고 merge : false 옵션줘서
 * 기존 캐시 날리고 다시 true 줘야 에러가 나지 않음
 * @goto
 *  https://go.apollo.dev/c/merging-non-normalized-objects
 *  https://go.apollo.dev/c/generating-unique-identifiers
 */

export const client = new ApolloClient({
  link: from([authMiddleWare, refreshLink, resetLink, httpLink]),
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
          getPersonalGeneral: {
            merge: true,
          },
          getPersonalEval: {
            merge: true,
          },
          getProjectInfo: {
            merge: true,
          },
          getLeaderboardLevel: {
            merge: true,
          },
          getLeaderboardExpIncrement: {
            merge: true,
          },
          getLeaderboardEvalCount: {
            merge: true,
          },
          getLeaderboardScore: {
            merge: true,
          },
          getEvalLogs: {
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
