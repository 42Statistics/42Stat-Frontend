import { EvalLogSortOrder } from '@shared/__generated__/graphql';
import { PropsWithReactNodeChildren } from '@shared/types/PropsWithChildren';
import { atom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { useSearchParams } from 'react-router-dom';
import type { EvalLogSearchArgs } from '../api/getEvalLogs';
import {
  EVAL_LOG_SEARCH_URL_PARAM_KEYS,
  EVAL_LOG_SEARCH_URL_PARAM_VALUES,
} from '../constants/urlParams';

export const evalLogSearchArgsAtom = atom<EvalLogSearchArgs>({});

export const setEvalLogSearchArgsByURLSearchParamsAtom = atom(
  null,
  (_, set, searchParams: URLSearchParams) =>
    set(evalLogSearchArgsAtom, toEvalLogSearchArgs(searchParams)),
);

export const EvalLogSearchArgsAtomHydrator = ({
  children,
}: PropsWithReactNodeChildren) => {
  const [searchParams] = useSearchParams();

  useHydrateAtoms([[evalLogSearchArgsAtom, toEvalLogSearchArgs(searchParams)]]);

  return children;
};

const { CORRECTOR, CORRECTED, PROJECT_NAME, FLAG, SORT_ORDER } =
  EVAL_LOG_SEARCH_URL_PARAM_KEYS;

const { BEGIN_AT_ASC, OUTSTANDING_FLAG } = EVAL_LOG_SEARCH_URL_PARAM_VALUES;

const toEvalLogSearchArgs = (
  searchParams: URLSearchParams,
): EvalLogSearchArgs => {
  return {
    corrector: searchParams.get(CORRECTOR) ?? undefined,
    corrected: searchParams.get(CORRECTED) ?? undefined,
    projectName: searchParams.get(PROJECT_NAME) ?? undefined,
    outstandingOnly: searchParams.get(FLAG) === OUTSTANDING_FLAG ? true : false,
    sortOrder:
      searchParams.get(SORT_ORDER) === BEGIN_AT_ASC
        ? EvalLogSortOrder.BeginAtAsc
        : EvalLogSortOrder.BeginAtDesc,
  };
};
