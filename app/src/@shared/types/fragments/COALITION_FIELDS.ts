import { gql } from '@shared/__generated__';

export const COALITION_FIELDS = gql(/* GraphQL */ `
  fragment coalitionFields on Coalition {
    id
    name
    slug
    imageUrl
    coverUrl
    color
    score
    userId
  }
`);
