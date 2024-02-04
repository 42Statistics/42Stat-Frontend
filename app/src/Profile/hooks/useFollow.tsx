import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_IS_FOLLOWING,
} from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

export const useFollow = (id: number) => {
  const [hitFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW_USER);
  const [hitUnfollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW_USER);
  const [followStatus, setFollowStatus] = useState<boolean>(false);

  const {
    data: dataFollowStatus,
    loading: loadingFollowStatus,
    error: errorFollowStatus,
    refetch: refetchFollowStatus,
  } = useQuery(GET_IS_FOLLOWING, {
    variables: { id },
  });

  const handleFollow = async () => {
    await (followStatus
      ? hitUnfollow({ variables: { id: id } })
      : hitFollow({ variables: { id: id } }));

    refetchFollowStatus();
  };

  useEffect(() => {
    if (dataFollowStatus) {
      setFollowStatus(dataFollowStatus.getIsFollowing);
    }
  }, [dataFollowStatus]);

  useEffect(() => {
    refetchFollowStatus();
  }, [refetchFollowStatus, id]);

  const loading = loadingFollow || loadingUnfollow || loadingFollowStatus;
  const error = errorFollow || errorUnfollow || errorFollowStatus;

  return {
    handleFollow,
    followStatus,
    loading,
    error,
  };
};
