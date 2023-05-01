import { gql } from '@/__generated__';

// FIXME: FIND_USER_PREVIEW 쿼리로 변경
export const FIND_PROJECT_PREVIEW = gql(/* GraphQL */ `
  query FindProjectPreview($name: String!) {
    findProjectPreview(name: $name) {
      id
      name
      url
    }
  }
`);
