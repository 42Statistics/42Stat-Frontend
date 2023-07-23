import { gql } from '@shared/__generated__';
import { client } from '@shared/providers/ApolloProvider';
import { setAccessToken } from '@utils/storage/accessToken';
import { setRefreshToken } from '@utils/storage/refreshToken';

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
