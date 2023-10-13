import { Text, H3BoldText, VStack, HStack, Writable } from '@shared/ui-kit';
import { Seo } from '@shared/components/Seo';
import { Footer } from '@core/components/Footer';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardCols';
import CalculatorInput from '@/Calculator/CalculatorInput';
import { useAtom, useSetAtom } from 'jotai';
import { calculatorPropsAtom } from '@/Calculator/atoms/CalculatorPropsAtom';
import { SubjectListAtom } from './atoms/SubjectListAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

export const GET_BLACKHOLE_INFO = gql(/* GraphQL */ `
  query GetBlackholeInfo {
    getPersonalGeneral {
      userProfile {
        level
      }
      beginAt
      blackholedAt
    }
  }
`);

const CalculatorLayout = () => {
  const theme = useTheme();
  const [calculatorProps, setCalculatorProps] = useAtom(calculatorPropsAtom);
  const setSubjectList = useSetAtom(SubjectListAtom);
  const { currentLevel, daysFromStart } = calculatorProps;
  const device = useDeviceType();
  const { loading, error, data } = useQuery(GET_BLACKHOLE_INFO);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    const name = e.target.name as keyof typeof calculatorProps;
    setCalculatorProps((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setCalculatorProps({
      currentLevel: data?.getPersonalGeneral.userProfile.level ?? 0,
      daysFromStart: Math.abs(
        getTimeDiffFromNow(
          new Date(data?.getPersonalGeneral.beginAt ?? ''),
          'day',
        ),
      ),
    });
    setSubjectList([
      {
        id: 0,
        name: '',
        exp: 0,
        score: 100,
        blackhole: 0,
        bonus: false,
        level: data?.getPersonalGeneral.userProfile.level ?? 0,
      },
    ]);
  }, [setCalculatorProps, setSubjectList, data]);

  if (loading || error || !data) {
    return <></>;
  }

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
              value={isNaN(currentLevel) ? 0 : currentLevel} //초기화 이슈
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
                value={isNaN(daysFromStart) ? 0 : daysFromStart}
                onChange={onChange}
              />
            </HStack>
          </InputLayout>
          <Text color={theme.colors.mono.gray500}>
            휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요
          </Text>
        </VStack>
      </VStack>
      <DashboardTemp
        contents={calculatorPageDashboardContents}
        rows={
          device === 'desktop'
            ? calculatorPageDashboardDesktop
            : calculatorPageDashboardTablet
        }
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
