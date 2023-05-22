import { gql } from '@/__generated__';

export const FIND_USER_PREVIEW = gql(/* GraphQL */ `
  query FindUserPreview($login: String!) {
    findUserPreview(login: $login) {
      id
      login
    }
  }
`);
