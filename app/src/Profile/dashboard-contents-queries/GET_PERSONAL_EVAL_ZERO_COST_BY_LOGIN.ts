import { gql } from '@shared/__generated__';

export const GET_PERSONAL_EVAL_ZERO_COST_BY_LOGIN = gql(/* GraphQL */ `
  query GetPersonalEvalZeroCostByLogin($login: String!) {
    getPersonalEval(login: $login) {
      correctionPoint
      recentComment
    }
  }
`);
