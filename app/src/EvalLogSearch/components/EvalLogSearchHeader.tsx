import { useTheme } from '@emotion/react';
import { PrimaryBoldText, Text, VStack } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { evalLogSearchArgsAtom } from '../atoms/evalLogSearchArgsAtom';
import { evalLogSearchTotalCountAtom } from '../atoms/evalLogSearchTotalCountAtom';
import { EVAL_LOG_SEARCH_ARGS_HEADER_TEXT } from '../constants/evalLogArgsText';

export const EvalLogSearchHeader = () => {
  const theme = useTheme();

  return (
    <VStack align="start">
      <EvalLogSearchHeaderFormDescriptor />
      <Text color={theme.colors.mono.gray300}>
        <EvalLogSearchHeaderTotalCountDescriptor />
      </Text>
    </VStack>
  );
};

const { USERS, PROJECT_NAME, FLAG, SORT_ORDER } =
  EVAL_LOG_SEARCH_ARGS_HEADER_TEXT;

const EvalLogSearchHeaderFormDescriptor = () => {
  const { corrector, corrected, projectName, outstandingOnly, sortOrder } =
    useAtomValue(evalLogSearchArgsAtom);

  return (
    <PrimaryBoldText>
      {[
        USERS(corrector, corrected),
        PROJECT_NAME(projectName),
        FLAG(outstandingOnly),
        SORT_ORDER(sortOrder),
      ].join(' / ')}
    </PrimaryBoldText>
  );
};

const EvalLogSearchHeaderTotalCountDescriptor = () => {
  const totalCount = useAtomValue(evalLogSearchTotalCountAtom);

  if (totalCount === undefined) {
    return '검색 중...';
  }

  return `검색 결과 ${totalCount.toLocaleString()}건`;
};
