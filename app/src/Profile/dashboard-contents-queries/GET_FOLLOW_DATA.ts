import { gql } from '@shared/__generated__';

export const FOLLOW_USER = gql(/* GraphQL */ `
  mutation FollowUser($id: Int!) {
    followUser(targetId: $id) {
      ... on FollowSuccess {
        userId
        followId
      }
    }
  }
`);

export const UNFOLLOW_USER = gql(/* GraphQL */ `
  mutation UnfollowUser($id: Int!) {
    unfollowUser(targetId: $id) {
      ... on FollowSuccess {
        userId
        followId
      }
    }
  }
`);

export const GET_IS_FOLLOWING = gql(/* GraphQL */ `
  query getIsFollowing($id: Int!) {
    getIsFollowing(targetId: $id)
  }
`);

export const GET_FOLLOWING_LIST = gql(/* GraphQL */ `
  query getFollowingList($id: Int!, $pageSize: Int!, $pageNumber: Int!) {
    getFollowingPaginated(
      targetId: $id
      pageSize: $pageSize
      pageNumber: $pageNumber
    ) {
      nodes {
        isFollowing
        userPreview {
          id
          login
          imgUrl
        }
        followAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`);

export const GET_FOLLOWER_LIST = gql(/* GraphQL */ `
  query getFollowerList($id: Int!, $pageSize: Int!, $pageNumber: Int!) {
    getFollowerPaginated(
      targetId: $id
      pageSize: $pageSize
      pageNumber: $pageNumber
    ) {
      nodes {
        isFollowing
        userPreview {
          id
          login
          imgUrl
        }
        followAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`);
