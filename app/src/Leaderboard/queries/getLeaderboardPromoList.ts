import { gql } from '@shared/__generated__';

export const GET_LEADERBOARD_PROMO_LIST = gql(/* GraphQL */ `
  query GetLeaderboardPromoList {
    getLeaderboardMetadata {
      promoList {
        promo
        beginAt
        userCount
      }
    }
  }
`);
