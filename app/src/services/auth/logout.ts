import { gql } from '@shared/__generated__';
import { ROUTES } from '@shared/constants/ROUTES';
import { client } from '@shared/providers/ApolloProvider';
import { clearStorage } from '@shared/utils/storage/clearStorage';

const LOGOUT = gql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

export const logout = async () => {
  const { data } = await client.mutate({ mutation: LOGOUT });
  if (data?.logout) {
    clearStorage();
    window.location.href = ROUTES.ROOT;
  } else {
    alert('로그아웃에 실패했습니다.'); // TODO: UI
  }
};
