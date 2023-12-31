import { useEffect } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_FOLLOW_STATUS,
} from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

export const useFollow = (login: string) => {
  const [hitFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW_USER);
  const [hitUnfollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW_USER);
  const {
    data: dataFollowStatus,
    loading: loadingFollowStatus,
    error: errorFollowStatus,
    refetch: refetchFollowStatus,
  } = useQuery(GET_FOLLOW_STATUS, {
    variables: { login },
  });

  let followStatus = dataFollowStatus?.getFollowStatus ?? false;

  const handleFollow = async () => {
    await (followStatus
      ? hitUnfollow({ variables: { login: login } })
      : hitFollow({ variables: { login: login } }));

    refetchFollowStatus();
    followStatus = dataFollowStatus?.getFollowStatus ?? false;
  };

  useEffect(() => {
    refetchFollowStatus();
  }, [refetchFollowStatus]);

  const loading = loadingFollow || loadingUnfollow || loadingFollowStatus;
  const error = errorFollow || errorUnfollow || errorFollowStatus;

  return {
    handleFollow,
    followStatus,
    loading,
    error,
  };
};
