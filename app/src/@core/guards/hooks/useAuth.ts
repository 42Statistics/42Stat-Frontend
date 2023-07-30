import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { getAccessToken } from '@shared/utils/storage/accessToken';
import { getRefreshToken } from '@shared/utils/storage/refreshToken';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

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

export const useAuth = () => {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [auth, setAuth] = useState<boolean>(false);

  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (accessToken === null && refreshToken === null) {
      setAuthLoading(false);
      return;
    }
    if (loading) {
      return;
    }
    if (error) {
      setAuthLoading(false);
      return;
    }
    if (!data) {
      setAuthLoading(false);
      return;
    }
    const { id, login, imgUrl, displayname } =
      data.getPersonalGeneral.userProfile;
    setUser({
      id,
      login,
      imgUrl,
      displayname,
    });
    setAuth(true);
    setAuthLoading(false);
  }, [loading, error, data, setUser]);

  return { auth, loading: authLoading };
};
