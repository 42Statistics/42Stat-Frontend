import { Text, H3BoldText, VStack, HStack, Writable } from '@shared/ui-kit';
import { Seo } from '@shared/components/Seo';
import { Footer } from '@core/components/Footer';
import { Dashboard } from '@shared/components/Dashboard';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import { calculatorPageDashboardRows } from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import CalculatorInput from '@/Calculator/CalculatorInput';
import { useAtom, useSetAtom } from 'jotai';
import CalculatorPropsAtom from '@/Calculator/atoms/CalculatorPropsAtom';
import SubjectListAtom from './atoms/SubjectListAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { set } from 'react-hook-form';

const CalculatorLayout = () => {
  const theme = useTheme();
  const [CalculatorProps, setCalculatorProps] = useAtom(CalculatorPropsAtom);
  const setSubjectList = useSetAtom(SubjectListAtom);
  const { currentLevel, daysFromStart } = CalculatorProps;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const name = e.target.name as keyof typeof CalculatorProps;
    setCalculatorProps((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setCalculatorProps(() => ({
      currentLevel: 0,
      daysFromStart: 0,
    }));

    setSubjectList([]);
  }, [setCalculatorProps, setSubjectList]);

  return (
    <VStack w="100%" spacing="2rem">
      <Seo title="블랙홀 계산기" />
      <VStack w="100%" align="start" spacing="2rem">
        <Text fontSize="4rem" fontWeight={600}>
          블랙홀 계산기
        </Text>
        <InputLayout>
          <H3BoldText>현재 레벨</H3BoldText>
          <HStack w="3rem">
            <Writable
              name="currentLevel"
              value={currentLevel}
              onChange={onChange}
            />
          </HStack>
        </InputLayout>
        <VStack w="100%" align="start" spacing="0.7rem">
          <InputLayout>
            <H3BoldText>본 과정 시작한지</H3BoldText>
            <HStack w="3rem">
              <Writable
                name="daysFromStart"
                value={daysFromStart}
                onChange={onChange}
              />
            </HStack>
          </InputLayout>
          <Text color={theme.colors.mono.gray500}>
            휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요
          </Text>
        </VStack>
      </VStack>
      <Dashboard
        contents={calculatorPageDashboardContents}
        rows={calculatorPageDashboardRows}
      />
      <CalculatorInputLayout>
        <CalculatorInput />
      </CalculatorInputLayout>
      <Footer />
    </VStack>
  );
};

export default CalculatorLayout;

const InputLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
`;

const CalculatorInputLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;
