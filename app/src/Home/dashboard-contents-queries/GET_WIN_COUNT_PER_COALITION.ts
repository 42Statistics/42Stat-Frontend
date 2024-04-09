import { gql } from '@shared/__generated__';

export const GET_WIN_COUNT_PER_COALITION = gql(/* GraphQL */ `
  query GetWinCountPerCoalition {
    getHomeCoalition {
      winCountPerCoalition {
        coalition {
          ...coalitionFields
        }
        value
      }
    }
  }
`);
