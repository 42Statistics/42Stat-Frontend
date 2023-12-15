import { gql } from '@shared/__generated__';

export const GET_USER_FOLLOWER_BY_LOGIN = gql(/* GraphQL */ `
  mutation GetUserFollowerByLogin($login: String!) {
		followUser(target: $login) {
		}

		unfollowUser(target: $login) {
		}

    getFollowerList(target: $login) {
      count
      followList {
        id
        login
        imgUrl
      }
      isFollowing
    }

    getFollowingList(target: $login) {
      count
      followList {
        id
        login
        imgUrl
      }
      isFollowing
    }
  }
`);
