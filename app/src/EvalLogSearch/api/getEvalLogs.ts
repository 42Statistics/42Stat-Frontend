import { gql } from '@shared/__generated__';
import { EvalLogSortOrder } from '@shared/__generated__/graphql';
import { RESULT_PER_PAGE } from '../constants/resultPerPage';

export const GET_EVAL_LOGS = gql(/* GraphQL */ `
  query GetEvalLogs(
    $after: String
    $first: Int
    $corrector: String
    $corrected: String
    $projectName: String
    $outstandingOnly: Boolean
    $sortOrder: EvalLogSortOrder
  ) {
    getEvalLogs(
      after: $after
      first: $first
      corrector: $corrector
      corrected: $corrected
      projectName: $projectName
      outstandingOnly: $outstandingOnly
      sortOrder: $sortOrder
    ) {
      edges {
        cursor
        node {
          id
          header {
            corrector {
              ...userPreviewFields
            }
            teamPreview {
              ...teamPreviewFields
            }
            beginAt
            projectPreview {
              ...projectPreviewFields
            }
            flag {
              id
              name
              isPositive
            }
          }
          correctorReview {
            mark
            review
          }
          correctedsReview {
            mark
            review
          }
        }
      }
      pageInfo {
        totalCount
        hasNextPage
        endCursor
      }
    }
  }
`);

export type EvalLogSearchArgs = Partial<{
  projectName: string;
  outstandingOnly: boolean;
  corrector: string;
  corrected: string;
  sortOrder: EvalLogSortOrder;
  first: number;
  after: string;
}>;

export const GET_EVAL_LOGS_DEFAULT_VARIABLES: EvalLogSearchArgs = {
  first: RESULT_PER_PAGE,
  sortOrder: EvalLogSortOrder.BeginAtDesc,
  outstandingOnly: false,
};
