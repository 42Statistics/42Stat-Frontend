import { gql } from '@shared/__generated__';

export const FOLLOW_USER = gql(/* GraphQL */ `
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

export const UNFOLLOW_USER = gql(/* GraphQL */ `
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

export const GET_FOLLOW_STATUS = gql(/* GraphQL */ `
  query getFollowStatus($login: String!) {
    getFollowStatus(target: $login)
  }
`);

export const GET_FOLLOWER_LIST = gql(/* GraphQL */ `
  query getFollowerList($login: String!) {
    getFollowerList(target: $login) {
      followList {
        user {
          id
          login
          imgUrl
        }
      }
      count
    }
  }
`);

export const GET_FOLLOWING_LIST = gql(/* GraphQL */ `
  query getFollowingList($login: String!) {
    getFollowingList(target: $login) {
      followList {
        user {
          id
          login
          imgUrl
        }
      }
      count
    }
  }
`);
