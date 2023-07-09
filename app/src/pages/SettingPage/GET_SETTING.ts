import { gql } from '@/__generated__';

export const GET_SETTING = gql(/* GraphQL */ `
  query GetSetting {
    getSetting {
      userLogin
      googleEmail
      linkedTime
    }
  }
`);
