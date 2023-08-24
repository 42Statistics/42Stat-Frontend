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
import { relayStylePagination } from '@apollo/client/utilities';
import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { getNewAccessToken } from '@core/services/auth/getNewAccessToken';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { getAccessToken } from '@shared/utils/storage/accessToken';
import { getRefreshToken } from '@shared/utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_BACKEND_GRAPHQL_ENDPOINT,
});

const authLink = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  if (accessToken === null) {
    return forward(operation);
  }
  const oldHeaders = operation.getContext().headers;
  operation.setContext({
    headers: {
      ...oldHeaders,
      authorization: `Bearer ${accessToken}`,
    },
  });
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  const oldHeaders = operation.getContext().headers;

  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      switch (error.extensions.status) {
        case 401:
          return fromPromise(
            getNewAccessToken(getRefreshToken() ?? ''),
          ).flatMap((newAccessToken) => {
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `Bearer ${newAccessToken}`,
              },
            });
            return forward(operation);
          });
      }
    }
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
// todo: 이거 제대로 알고 쓴 거 맞나?
export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getMyInfo: {
            merge: true,
          },
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
            ...relayStylePagination(),
            keyArgs: [
              'projectName',
              'outstandingOnly',
              'corrector',
              'corrected',
              'sortOrder',
            ],
          },
        },
      },
    },
  }),
});

const Provider = ({ children }: PropsWithReactElementChildren) => {
  return (
    <ApolloProvider client={client}>
      <ResponseInterceptor400>{children}</ResponseInterceptor400>
    </ApolloProvider>
  );
};

const ResponseInterceptor400 = ({
  children,
}: PropsWithReactElementChildren) => {
  const setReLoginDialogInfo = useSetAtom(reLoginDialogInfoAtom);

  useEffect(() => {
    const responseInterceptor400 = onError(({ graphQLErrors }) => {
      if (graphQLErrors) {
        const refreshToken = getRefreshToken();
        const accessToken = getAccessToken();

        for (const error of graphQLErrors) {
          switch (error.extensions.status) {
            case 400:
              if (refreshToken === null && accessToken === null) {
                break;
              }
              setReLoginDialogInfo({
                isOpen: true,
                description: error.message,
              });
              break;
          }
        }
      }
    });

    client.setLink(
      from([responseInterceptor400, errorLink, authLink, httpLink]),
    );
  }, [setReLoginDialogInfo]);

  return <>{children}</>;
};

export default Provider;
