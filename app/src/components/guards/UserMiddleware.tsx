import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import { useSetAtom } from 'jotai';
import { Outlet } from 'react-router-dom';

const GET_MY_PROFILE = gql(/* GraphQL */ `
  query GetMyProfile {
    getPersonalGeneral {
      userProfile {
        id
        login
        imgUrl
        displayname
      }
    }
  }
`);

export const UserMiddleware = () => {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  const setUser = useSetAtom(userAtom);

  if (loading || error || !data) {
    return null;
  }
  const { id, login, imgUrl, displayname } =
    data.getPersonalGeneral.userProfile;
  setUser({
    id,
    login,
    imgUrl,
    displayname,
  });
  return <Outlet />;
};
