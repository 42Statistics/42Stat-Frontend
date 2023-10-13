import { useTheme } from '@emotion/react';
import { useAtomValue, useSetAtom } from 'jotai';

import {
  emptySubject,
  subjectListAtom,
  subjectListAtomInitialValue,
} from '@/Calculator/atoms/subjectListAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import styled from '@emotion/styled';
import { Button, CaptionText, H2BoldText, HStack } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';

export const CalculatorInputHeader = () => {
  const theme = useTheme();
  const subjectList = useAtomValue(subjectListAtom);
  const setCalculatorDialog = useSetAtom(calculatorDialogAtom);
  const { updateSubjectList } = useSubjectList();

  const handleResetButtonClick = () => {
    updateSubjectList(subjectListAtomInitialValue);
  };

  const handleAddButtonClick = () => {
    if (subjectList.length >= 20) {
      setCalculatorDialog({
        isOpen: true,
        description: '과제는 최대 20개까지 추가 가능합니다.',
        focus: 0,
      });
      return;
    }

    updateSubjectList([...subjectList, emptySubject]);
  };

  return (
    <Layout>
      <HStack spacing="1rem" align="baseline">
        <H2BoldText>프로젝트 목록</H2BoldText>
        <CaptionText>최대 20개</CaptionText>
      </HStack>
      <HStack spacing="1rem">
        <Button
          backgroundColor={theme.colors.semantic.warning}
          onClick={handleResetButtonClick}
        >
          초기화
        </Button>
        <Button
          backgroundColor={theme.colors.accent.default}
          onClick={handleAddButtonClick}
        >
          추가
        </Button>
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  ${mq({
    flexDirection: ['column', 'row'],
    alignItems: ['flex-start', 'baseline'],
    justifyContent: ['flex-start', 'space-between'],
  })}
`;
