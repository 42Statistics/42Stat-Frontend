import { gql } from '@shared/__generated__';

export const GET_PERSONAL_BLACKHOLE = gql(/* GraphQL */ `
  query GetPersonalBlackhole($login: String!) {
    getPersonalGeneral(login: $login) {
      blackholedAt
    }
  }
`);
