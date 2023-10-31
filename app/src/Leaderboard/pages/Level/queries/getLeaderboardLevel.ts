import { gql } from '@shared/__generated__';

export const GET_LEADERBOARD_LEVEL = gql(/* GraphQL */ `
  query GetLeaderboardLevel(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
    $promo: Int
    $coalitionId: Int
  ) {
    getLeaderboardLevel {
      byDateTemplate(
        pageSize: $pageSize
        pageNumber: $pageNumber
        dateTemplate: $dateTemplate
        promo: $promo
        coalitionId: $coalitionId
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
