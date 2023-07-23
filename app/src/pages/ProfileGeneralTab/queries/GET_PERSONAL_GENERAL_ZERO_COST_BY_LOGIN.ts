import { gql } from '@shared/__generated__';

export const GET_PERSONAL_GENERAL_ZERO_COST_BY_LOGIN = gql(/* GraphQL */ `
  query GetPersonalGeneralZeroCostByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      beginAt
      blackholedAt
      ...coalitionScoreFragment
      teamInfo {
        lastPassed
        lastRegistered
      }
      wallet
    }
  }

  fragment coalitionScoreFragment on PersonalGeneral {
    userProfile {
      coalition {
        ...coalitionFields
      }
    }
    scoreInfo {
      value
      rankInCoalition
    }
  }
`);
