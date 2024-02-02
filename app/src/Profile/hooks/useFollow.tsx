import { useEffect, useState } from 'react';

import { useMutation, useQuery } from '@apollo/client';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_IS_FOLLOWING,
} from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';

type FollowingState = boolean | undefined;

type FollowProps = {
  id: number;
  isFollowing: FollowingState;
};

export const useFollow = ({ id, isFollowing }: FollowProps) => {
  const [hitFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW_USER);
  const [hitUnfollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW_USER);
  const [followStatus, setFollowStatus] = useState<FollowingState>(
    isFollowing !== undefined ? isFollowing : undefined,
  );

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
    // Update followStatus only when dataFollowStatus changes
    if (dataFollowStatus) {
      setFollowStatus(dataFollowStatus.getIsFollowing);
    }
  }, [dataFollowStatus]);

  useEffect(() => {
    refetchFollowStatus();
  }, [refetchFollowStatus, id]); // Add id as a dependency if necessary

  const loading = loadingFollow || loadingUnfollow || loadingFollowStatus;
  const error = errorFollow || errorUnfollow || errorFollowStatus;

  return {
    handleFollow,
    followStatus,
    loading,
    error,
  };
};
