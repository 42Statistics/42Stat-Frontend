import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { InfoTooltip } from '@shared/components/InfoTooltip';
import { Body1MediumText, HStack, Input, Text, VStack } from '@shared/ui-kit';

export const CalculatorBasicInfoInputGroup = () => {
  const [calculatorProps, setCalculatorProps] = useAtom(calculatorPropsAtom);
  const { currentLevel, daysFromStart, currentBlackhole } = calculatorProps;
  const subjectList = useAtomValue(subjectListAtom);
  const { updateSubjectList } = useSubjectList();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value) || value < 0) return;
    const name = e.target.name as keyof typeof calculatorProps;
    setCalculatorProps((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handleChange에서 updateSubjectList를 호출할 때 update되지 않는 문제
  useEffect(() => {
    updateSubjectList(subjectList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calculatorProps]);

  return (
    <VStack align="start" spacing="1rem">
      <HStack spacing="2rem">
        <HStack w="13rem" justify="start" spacing="1rem">
          <Body1MediumText>현재 레벨</Body1MediumText>
          <InfoTooltip text="레벨이 8.41을 넘으면, 블랙홀 기간이 늘지 않아요." />
        </HStack>
        <Input
          name="currentLevel"
          type="number"
          min="0"
          max="30"
          step="0.01"
          value={currentLevel}
          onChange={handleChange}
          style={{ width: '5rem' }}
        />
      </HStack>
      <HStack spacing="2rem">
        <HStack w="13rem" justify="start" spacing="1rem">
          <Body1MediumText>현재 블랙홀</Body1MediumText>
          <InfoTooltip text="현재 블랙홀 + 본 과정 시작 날짜가 670일이 넘으면, 블랙홀 기간이 늘지 않아요." />
        </HStack>
        <HStack spacing="0.3rem">
          <Input
            name="currentBlackhole"
            type="number"
            min="0"
            value={currentBlackhole}
            onChange={handleChange}
            style={{ width: '5rem' }}
          />
          <Text>일</Text>
        </HStack>
      </HStack>
      <HStack spacing="2rem">
        <HStack w="13rem" justify="start" spacing="1rem">
          <Body1MediumText>본과정 시작한지</Body1MediumText>
          <InfoTooltip text="휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요." />
        </HStack>
        <HStack spacing="0.3rem">
          <Input
            name="daysFromStart"
            type="number"
            min="0"
            value={daysFromStart}
            onChange={handleChange}
            style={{ width: '5rem' }}
          />
          <Text>일</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};