import { gql } from '@shared/__generated__';

export const GET_LEADERBOARD_EXP_INCREMENT = gql(/* GraphQL */ `
  query GetLeaderboardExpIncrement(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
    $promo: Int
  ) {
    getLeaderboardExpIncrement {
      byDateTemplate(
        pageSize: $pageSize
        pageNumber: $pageNumber
        dateTemplate: $dateTemplate
        promo: $promo
      ) {
        data {
          me {
            userPreview {
              ...userPreviewFields
            }
            value
            rank
          }
          totalRanking {
            nodes {
              userPreview {
                ...userPreviewFields
              }
              value
              rank
            }
            totalCount
            pageSize
            pageNumber
          }
        }
        start
        end
      }
    }
  }
`);
