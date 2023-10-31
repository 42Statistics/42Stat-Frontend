import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import { getAccessToken } from '@shared/utils/storage/accessToken';
import { getRefreshToken } from '@shared/utils/storage/refreshToken';

const GET_MY_PREVIEW = gql(/* GraphQL */ `
  query GetMyPreview {
    getMyInfo {
      userPreview {
        id
        login
        imgUrl
      }
      displayname
    }
  }
`);

export const useAuth = () => {
  const { loading, error, data } = useQuery(GET_MY_PREVIEW);
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

    const user = data.getMyInfo
      ? {
          ...data.getMyInfo.userPreview,
          displayname: data.getMyInfo.displayname,
        }
      : {
          id: 0,
          login: 'visitor',
          imgUrl: null,
          displayname: 'visitor',
        };

    setUser(user);
    setAuth(true);
    setAuthLoading(false);
  }, [loading, error, data, setUser]);

  return { auth, loading: authLoading };
};
