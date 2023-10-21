import type { EvalLogSearchArgs } from '@/EvalLogSearch/api/getEvalLogs';
import { EvalLogSortOrder } from '@shared/__generated__/graphql';

const ANY_USER = '누군가';
const ANY_PROJECT = '모든 서브젝트';
const ALL_FLAG_INCLUDED = '모든 플래그';
const OUTSTANDING_FLAG_ONLY = 'Outstanding만';
const ASC = '오래된 순';
const DESC = '최신 순';

export const EVAL_LOG_SEARCH_ARGS_TEXT = {
  ANY_USER,
  ANY_PROJECT,
  ALL_FLAG_INCLUDED,
  OUTSTANDING_FLAG_ONLY,
  ASC,
  DESC,
} as const;

const USERS = (corrector?: string, corrected?: string) =>
  (corrector ?? ANY_USER) + ' → ' + (corrected ?? ANY_USER);
const PROJECT_NAME = (projectName?: string) => projectName ?? ANY_PROJECT;
const FLAG = (outstandingOnly?: boolean) =>
  outstandingOnly ? OUTSTANDING_FLAG_ONLY : ALL_FLAG_INCLUDED;
const SORT_ORDER = (sortOrder?: EvalLogSortOrder) =>
  sortOrder === EvalLogSortOrder.BeginAtAsc ? ASC : DESC;

export const EVAL_LOG_SEARCH_ARGS_HEADER_TEXT = {
  USERS,
  PROJECT_NAME,
  FLAG,
  SORT_ORDER,
};

export const EVAL_LOG_SEARCH_ARGS_SEO_TITLE = ({
  corrector,
  corrected,
  projectName,
}: Pick<EvalLogSearchArgs, 'corrector' | 'corrected' | 'projectName'>) =>
  [USERS(corrector, corrected), PROJECT_NAME(projectName)].join(' / ') +
  ' 평가 로그 검색';
