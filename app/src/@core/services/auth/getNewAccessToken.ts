import { client } from '@core/providers/ApolloProvider';
import { gql } from '@shared/__generated__';
import { setAccessToken } from '@shared/utils/storage/accessToken';
import { setRefreshToken } from '@shared/utils/storage/refreshToken';

const GET_NEW_ACCESS_TOKEN = gql(/* GraphQL */ `
  mutation GetNewAccessToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      message
      accessToken
      refreshToken
      userId
    }
  }
`);

export const getNewAccessToken = async (refreshToken: string) => {
  const { data } = await client.mutate({
    mutation: GET_NEW_ACCESS_TOKEN,
    variables: { refreshToken },
  });
  if (!data) {
    return null;
  }
  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    data.refreshToken;
  setAccessToken(newAccessToken);
  setRefreshToken(newRefreshToken);
  return newAccessToken;
};
