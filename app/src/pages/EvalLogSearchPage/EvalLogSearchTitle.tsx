import { PrimaryBoldText, Text, VStack } from '@components/common';
import { useTheme } from '@emotion/react';
import { EvalLogSearchForm } from './EvalLogSearchPage';

export const EvalLogSearchTitle = ({ form }: { form: EvalLogSearchForm }) => {
  const theme = useTheme();

  return (
    <VStack w="100%" align="start">
      <PrimaryBoldText selectable>{`${
        form.corrector === '' ? 'Anyone' : form.corrector
      } → ${form.corrected === '' ? 'Anyone' : form.corrected} / ${
        form.projectName === '' ? '모든 서브젝트' : form.projectName
      } / ${
        !form.outstandingOnly ? '모든 평가' : 'Outstanding만'
      } / 최신순`}</PrimaryBoldText>
      <Text color={theme.colors.mono.gray300} selectable>
        검색결과 32,801건
      </Text>
    </VStack>
  );
};
