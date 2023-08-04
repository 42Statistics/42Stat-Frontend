import { gql } from '@shared/__generated__';

export const USER_PROFILE_FIELDS = gql(/* GraphQL */ `
  fragment userProfileFields on UserProfile {
    id
    login
    imgUrl
    grade
    displayname
    coalition {
      ...coalitionFields
    }
    titles {
      titleId
      name
      selected
      createdAt
      updatedAt
    }
    level
  }
`);
