import { PrimaryBoldText, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import { EvalLogSearchFormData } from '.';

type EvalLogSearchTitleProps = {
  form: EvalLogSearchFormData;
  totalCount: number;
};

export const EvalLogSearchTitle = ({
  form,
  totalCount,
}: EvalLogSearchTitleProps) => {
  const theme = useTheme();

  return (
    <VStack w="100%" align="start">
      <PrimaryBoldText selectable>{`${
        form.corrector === '' ? 'Anyone' : form.corrector
      } → ${form.corrected === '' ? 'Anyone' : form.corrected} / ${
        form.projectName === '' ? '모든 서브젝트' : form.projectName
      } / ${form.flag === 'all' ? '모든 평가' : 'Outstanding만'} / ${
        form.sortOrder === 'desc' ? '최신 순' : '오래된 순'
      }`}</PrimaryBoldText>
      <Text color={theme.colors.mono.gray300} selectable>
        검색결과 {totalCount?.toLocaleString()}건
      </Text>
    </VStack>
  );
};
