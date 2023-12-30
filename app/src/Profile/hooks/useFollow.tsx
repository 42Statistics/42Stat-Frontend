import { useMutation, useQuery } from '@apollo/client';

import {
  FOLLOW_USER,
  UNFOLLOW_USER,
  GET_FOLLOW_STATUS,
  GET_FOLLOWING_LIST,
  GET_FOLLOWER_LIST,
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
  const {
    data: followingList,
    loading: loadingFollowingList,
    error: errorFollowingList,
    refetch: refetchFollowingList,
  } = useQuery(GET_FOLLOWING_LIST, {
    variables: { login },
  });
  const {
    data: followerList,
    loading: loadingFollowerList,
    error: errorFollowerList,
    refetch: refetchFollowerList,
  } = useQuery(GET_FOLLOWER_LIST, {
    variables: { login },
  });

  let followStatus = dataFollowStatus?.getFollowStatus ?? false;

  const handleFollow = async () => {
    await (followStatus
      ? hitUnfollow({ variables: { login: login } })
      : hitFollow({ variables: { login: login } }));

    refetchFollowStatus();
    refetchFollowingList();
    refetchFollowerList();
    followStatus = dataFollowStatus?.getFollowStatus ?? false;
  };

  const loading =
    loadingFollow ||
    loadingUnfollow ||
    loadingFollowStatus ||
    loadingFollowingList ||
    loadingFollowerList;
  const error =
    errorFollow ||
    errorUnfollow ||
    errorFollowStatus ||
    errorFollowingList ||
    errorFollowerList;

  return {
    handleFollow,
    followingList,
    followerList,
    followStatus,
    loading,
    error,
  };
};
