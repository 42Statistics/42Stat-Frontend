import { gql } from '@shared/__generated__';

export const GET_USER_PROFILE_BY_LOGIN = gql(/* GraphQL */ `
  query GetUserProfileByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      userProfile {
        ...userProfileFields
      }
    }
  }
`);
