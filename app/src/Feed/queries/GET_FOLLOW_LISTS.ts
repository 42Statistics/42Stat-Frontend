import { gql } from '@shared/__generated__';

export const GET_FOLLOW_LISTS = gql(/* GraphQL */ `
  query getFollowLists($id: Int!, $pageSize: Int!, $pageNumber: Int!) {
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
