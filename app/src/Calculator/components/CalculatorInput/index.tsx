import { useAtomValue, useSetAtom } from 'jotai';
import { useTheme } from '@emotion/react';

import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';

import { Divider, VStack } from '@shared/ui-kit';

import { CalculatorInputContent } from '@/Calculator/components/CalculatorInput/CalculatorInputContent';
import { CalculatorInputHeader } from '@/Calculator/components/CalculatorInput/CalculatorInputHeader';
import {
  emptySubject,
  subjectListAtom,
} from '@/Calculator/atoms/subjectListAtom';
import { currentOpenSpotlightIndexAtom } from '@/Calculator/atoms/currentOpenSpotlightIndexAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';

export const CalculatorInput = () => {
  const theme = useTheme();
  const subjectList = useAtomValue(subjectListAtom);
  const setCalculatorDialog = useSetAtom(calculatorDialogAtom);
  const setCurrentOpenSpotlightIndex = useSetAtom(
    currentOpenSpotlightIndexAtom,
  );
  const { updateSubjectList } = useSubjectList();

  const handleSubjectAdd = () => {
    if (subjectList.length >= 20) {
      setCalculatorDialog({
        isOpen: true,
        description: '과제는 최대 20개까지 추가 가능합니다.',
        focus: 0,
      });
      return;
    }

    const firstEmptyIndex = subjectList.findIndex(
      (subject) => subject.name === '',
    );

    setCurrentOpenSpotlightIndex(
      firstEmptyIndex === -1 ? subjectList.length : firstEmptyIndex,
    );
    updateSubjectList([...subjectList, emptySubject(subjectList.length)]);
  };

  return (
    <VStack w="100%" spacing="1rem">
      <CalculatorInputHeader handleSubjectAdd={handleSubjectAdd} />
      <Divider color={theme.colors.mono.black} />
      <CalculatorInputContent handleSubjectAdd={handleSubjectAdd}/>
    </VStack>
  );
};
