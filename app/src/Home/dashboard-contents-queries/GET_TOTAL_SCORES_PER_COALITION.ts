import { gql } from '@shared/__generated__';

export const GET_TOTAL_SCORES_PER_COALITION = gql(/* GraphQL */ `
  query GetTotalScoresPerCoalition {
    getHomeCoalition {
      totalScoresPerCoalition {
        coalition {
          ...coalitionFields
        }
        value
      }
    }
  }
`);
