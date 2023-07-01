import { gql } from '@/__generated__';

export const GET_PERSONAL_EVAL_BY_LOGIN = gql(/* GraphQL */ `
  query GetPersonalEvalByLogin($login: String!) {
    getPersonalEval(login: $login) {
      correctionPoint
      totalCount
      totalDuration
      averageDuration
      averageFinalMark
      averageCommentLength
      averageFeedbackLength
      recentComment
    }
  }
`);
