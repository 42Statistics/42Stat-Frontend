import { gql } from '@shared/__generated__';

export const GET_SCORE_RECORDS_PER_COALITION = gql(/* GraphQL */ `
  query GetScoreRecordsPerCoalition($last: Int!) {
    getHomeCoalition {
      scoreRecordsPerCoalition(last: $last) {
        coalition {
          ...coalitionFields
        }
        records {
          at
          value
        }
      }
    }
  }
`);
