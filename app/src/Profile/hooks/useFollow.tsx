import { useState } from 'react';

import { useMutation } from '@apollo/client';

import { gql } from '@shared/__generated__';

const FOLLOW_USER = gql(/* GraphQL */ `
  mutation FollowUser($login: String!) {
    followUser(target: $login) {
      ... on FollowSuccess {
        message
      }
      ... on FollowFail {
        message
      }
    }
  }
`);

const UNFOLLOW_USER = gql(/* GraphQL */ `
  mutation UnfollowUser($login: String!) {
    unfollowUser(target: $login) {
      ... on FollowSuccess {
        message
      }
      ... on FollowFail {
        message
      }
    }
  }
`);

export const useFollow = () => {
  const [followStatus /* setFollowStatus */] = useState(false);

  //setFollowStatus

  const [
    hitFollow,
    { data: dataFollow, loading: loadingFollow, error: errorFollow },
  ] = useMutation(FOLLOW_USER);
  const [
    hitUnfollow,
    { data: dataUnfollow, loading: loadingUnfollow, error: errorUnfollow },
  ] = useMutation(UNFOLLOW_USER);

  const handleFollow = followStatus ? hitFollow : hitUnfollow;
  const data = followStatus ? dataFollow : dataUnfollow;
  const loading = followStatus ? loadingFollow : loadingUnfollow;
  const error = followStatus ? errorFollow : errorUnfollow;

  return {
    handleFollow,
    followStatus,
    data,
    loading,
    error,
  };
};
