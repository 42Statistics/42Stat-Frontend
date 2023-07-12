import { gql } from '@/__generated__';
import { client } from '@providers/ApolloProvider';
import { setAccessToken } from '@utils/storage/accessToken';
import { setRefreshToken } from '@utils/storage/refreshToken';

const GET_NEW_ACCESS_TOKEN = gql(/* GraphQL */ `
  mutation GetNewAccessToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      __typename
      ... on Success {
        message
        accessToken
        refreshToken
        userId
      }
      ... on NoAssociated {
        message
      }
    }
  }
`);

export const getNewAccessToken = async (refreshToken: string) => {
  const { data } = await client.mutate({
    mutation: GET_NEW_ACCESS_TOKEN,
    variables: { refreshToken },
  });
  if (!data || data.refreshToken.__typename !== 'Success') {
    return null;
  }
  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    data.refreshToken;
  setAccessToken(newAccessToken);
  setRefreshToken(newRefreshToken);
  return newAccessToken;
};
