import { useTheme } from '@emotion/react';
import { useAtomValue } from 'jotai';

import { PrimaryBoldText, Text, VStack } from '@shared/ui-kit';

import { evalLogSearchArgsAtom } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';
import { evalLogSearchTotalCountAtom } from '@/EvalLogSearch/atoms/evalLogSearchTotalCountAtom';
import { EVAL_LOG_SEARCH_ARGS_HEADER_TEXT } from '@/EvalLogSearch/constants/evalLogArgsText';

export const EvalLogSearchHeader = () => {
  return (
    <VStack align="start">
      <EvalLogSearchHeaderFormDescriptor />
      <EvalLogSearchHeaderTotalCountDescriptor />
    </VStack>
  );
};

const { USERS, PROJECT_NAME, FLAG, SORT_ORDER } =
  EVAL_LOG_SEARCH_ARGS_HEADER_TEXT;

const EvalLogSearchHeaderFormDescriptor = () => {
  const {
    corrector,
    corrected,
    projectName,
    outstandingOnly,
    imperfectOnly,
    sortOrder,
  } = useAtomValue(evalLogSearchArgsAtom);

  return (
    <PrimaryBoldText>
      {[
        USERS(corrector, corrected),
        PROJECT_NAME(projectName),
        FLAG(outstandingOnly, imperfectOnly),
        SORT_ORDER(sortOrder),
      ].join(' / ')}
    </PrimaryBoldText>
  );
};

const EvalLogSearchHeaderTotalCountDescriptor = () => {
  const theme = useTheme();
  const totalCount = useAtomValue(evalLogSearchTotalCountAtom);

  if (totalCount === undefined) {
    return <Text color={theme.colors.mono.gray500}>검색 중...</Text>;
  }

  return (
    <Text color={theme.colors.mono.gray500}>
      검색 결과 {totalCount.toLocaleString()}건
    </Text>
  );
};
