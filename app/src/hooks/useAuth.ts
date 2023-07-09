import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { userAtom } from '@atoms/userAtom';
import { getAccessToken, setAccessToken } from '@utils/storage/accessToken';
import { getRefreshToken, setRefreshToken } from '@utils/storage/refreshToken';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const VERIFY = gql(/* GraphQL */ `
  mutation Verify($accessToken: String!, $refreshToken: String!) {
    refreshToken(accessToken: $accessToken, refreshToken: $refreshToken) {
      __typename
      ... on UnauthorizedType {
        status
        message
      }
      ... on NotFoundType {
        status
        message
      }
      ... on InternalServerErrorType {
        status
        message
      }
      ... on SuccessType {
        status
        accessToken
        refreshToken
        userPreview {
          id
          login
          imgUrl
          displayname
        }
      }
    }
  }
`);

export const useAuth = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const [loading, setLoading] = useState<boolean>(true);
  const [verify, { loading: mutationLoading, error, data }] =
    useMutation(VERIFY);

  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (!accessToken || !refreshToken) {
      setLoading(false);
      return;
    }
    verify({
      variables: {
        accessToken,
        refreshToken,
      },
    });
  }, [accessToken, refreshToken, verify]);

  useEffect(() => {
    if (mutationLoading || error || !data) {
      return;
    }
    if (data.refreshToken.__typename === 'SuccessType') {
      const { accessToken, refreshToken, userPreview } = data.refreshToken;
      const { id, login, imgUrl, displayname } = userPreview;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      if (user.id !== id) {
        setUser({
          id,
          login,
          imgUrl,
          displayname,
        });
      }
      setAuth(true);
    }
    setLoading(false);
  }, [mutationLoading, error, data, setUser, user]);

  return { auth, loading };
};
