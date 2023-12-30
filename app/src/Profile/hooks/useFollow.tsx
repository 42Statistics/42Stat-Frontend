import { useMutation, useQuery } from '@apollo/client';

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

const FOLLOW_STATUS = gql(/* GraphQL */ `
  query FollowStatus($login: String!) {
    getFollowStatus(target: $login)
  }
`);

export const useFollow = (login: string) => {
  const [hitFollow, { loading: loadingFollow, error: errorFollow }] =
    useMutation(FOLLOW_USER);
  const [hitUnfollow, { loading: loadingUnfollow, error: errorUnfollow }] =
    useMutation(UNFOLLOW_USER);
  const { data: dataFollowStatus, refetch: refetchFollowStatus } = useQuery(
    FOLLOW_STATUS,
    {
      variables: { login },
    },
  );

  //todo: followStatus, hitFollow, hitUnfollow 에러일 때 처리
  let followStatus = dataFollowStatus?.getFollowStatus ?? false;

  const handleFollow = async () => {
    await (followStatus
      ? hitUnfollow({ variables: { login: login } })
      : hitFollow({ variables: { login: login } }));

    refetchFollowStatus();
    followStatus = dataFollowStatus?.getFollowStatus ?? false;
  };

  const loading = followStatus ? loadingFollow : loadingUnfollow;
  const error = followStatus ? errorFollow : errorUnfollow;

  return {
    handleFollow,
    followStatus,
    loading,
    error,
  };
};
