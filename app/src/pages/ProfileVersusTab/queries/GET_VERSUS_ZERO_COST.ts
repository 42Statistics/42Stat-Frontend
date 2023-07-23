import { gql } from '@/__generated__';

export const GET_VERSUS_ZERO_COST = gql(/* GraphQL */ `
  query GetVersusZeroCost($login1: String!, $login2: String!) {
    data1: getPersonalGeneral(login: $login1) {
      userProfile {
        level
      }
      beginAt
    }
    data2: getPersonalGeneral(login: $login2) {
      userProfile {
        level
      }
      beginAt
    }
  }
`);
