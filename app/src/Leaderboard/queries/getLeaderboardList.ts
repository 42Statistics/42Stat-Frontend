import { gql } from '@shared/__generated__';

export const GET_LEADERBOARD_LIST = gql(/* GraphQL */ `
  query GetLeaderboardList {
    getLeaderboardMetadata {
      promoList {
        promo
        beginAt
      }
      coalitionList {
        id
        name
        imgUrl
        coverUrl
        color
      }
    }
  }
`);
