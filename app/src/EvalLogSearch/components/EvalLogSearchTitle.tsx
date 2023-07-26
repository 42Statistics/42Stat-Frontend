import { useTheme } from '@emotion/react';
import type { EvalLogSearchModel } from '@shared/types/EvalLogSearchModel';
import { PrimaryBoldText, Text, VStack } from '@shared/ui-kit';

type EvalLogSearchTitleProps = {
  form: EvalLogSearchModel;
  totalCount?: number;
};

export const EvalLogSearchTitle = ({
  form,
  totalCount,
}: EvalLogSearchTitleProps) => {
  const theme = useTheme();

  return (
    <VStack align="start">
      <PrimaryBoldText>{`${
        form.corrector === '' ? 'Anyone' : form.corrector
      } → ${form.corrected === '' ? 'Anyone' : form.corrected} / ${
        form.projectName === '' ? '모든 서브젝트' : form.projectName
      } / ${form.flag === 'all' ? '모든 평가' : 'Outstanding만'} / ${
        form.sortOrder === 'desc' ? '최신 순' : '오래된 순'
      }`}</PrimaryBoldText>
      <Text color={theme.colors.mono.gray300}>
        {totalCount === undefined
          ? '검색 중...'
          : `검색 결과 ${totalCount.toLocaleString()}건`}
      </Text>
    </VStack>
  );
};
