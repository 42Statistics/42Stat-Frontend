import { EvalLogSortOrder } from '@shared/__generated__/graphql';

export const EVAL_LOG_SEARCH_URL_PARAM_KEYS = {
  CORRECTOR: 'corrector',
  CORRECTED: 'corrected',
  PROJECT_NAME: 'projectName',
  FLAG: 'flag',
  SORT_ORDER: 'sortOrder',
} as const;

export const EVAL_LOG_SEARCH_URL_PARAM_VALUES = {
  ALL_FLAG: 'all',
  OUTSTANDING_FLAG: 'outstanding',
  IMPERFECT_FLAG: 'imperfect',
  BEGIN_AT_ASC: EvalLogSortOrder.BeginAtAsc,
  BEGIN_AT_DESC: EvalLogSortOrder.BeginAtDesc,
} as const;
