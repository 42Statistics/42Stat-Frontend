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
      ...desinyRankingFragment
    }
  }

  fragment desinyRankingFragment on PersonalEval {
    destinyRanking(limit: 5) {
      userPreview {
        id
        login
        imgUrl
      }
      value
      rank
    }
  }
`);
