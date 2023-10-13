import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { CalculatorInput } from '@/Calculator/components/CalculatorInput';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardCols';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { InfoTooltip } from '@shared/components/InfoTooltip';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, H3BoldText, HStack, Input, VStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { subjectListAtom } from './atoms/subjectListAtom';
import { CalculatorInputMobile } from './components/CalculatorInput/CalculatorInputMobile';
import { useSubjectList } from './hooks/useSubjectList';

export const GET_BLACKHOLE_INFO = gql(/* GraphQL */ `
  query GetBlackholeInfo {
    getPersonalGeneral {
      userProfile {
        level
      }
      beginAt
      blackholedAt
    }
    getExpTable {
      level
      exp
    }
  }
`);

const CalculatorPage = () => {
  const [calculatorProps, setCalculatorProps] = useAtom(calculatorPropsAtom);
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);
  const { updateSubjectList } = useSubjectList();
  const { currentLevel, daysFromStart, currentBlackhole } = calculatorProps;
  const device = useDeviceType();
  const { loading, error, data } = useQuery(GET_BLACKHOLE_INFO);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
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

  useEffect(() => {
    if (!data) {
      return;
    }
    const {
      beginAt,
      blackholedAt,
      userProfile: { level },
    } = data.getPersonalGeneral;

    const expMaxTable = data.getExpTable.map((level) => level.exp);
    const expReqTable = [expMaxTable[0]];
    for (let i = 1; i < expMaxTable.length; i++) {
      expReqTable.push(expMaxTable[i] - expMaxTable[i - 1]);
    }

    setCalculatorProps({
      currentLevel: level,
      currentBlackhole:
        blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : 0,
      daysFromStart: -getTimeDiffFromNow(new Date(beginAt), 'day'),
      expMaxTable: expMaxTable,
      expReqTable: expReqTable,
    });
    setSubjectList([
      {
        id: 0,
        name: '',
        exp: 0,
        expEdited: 0,
        score: 100,
        blackhole: 0,
        bonus: false,
        startLevel: level,
        finishLevel: level,
      },
    ]);
  }, [setCalculatorProps, setSubjectList, data]);

  if (loading || error || !data) {
    return <></>;
  }

  return (
    <>
      <Seo title="블랙홀 계산기" />
      <VStack w="100%" spacing="2rem">
        <VStack w="100%" align="start" spacing="1rem">
          <H1BoldText>블랙홀 계산기</H1BoldText>
          <InputLayout>
            <HStack spacing="1rem">
              <H3BoldText>현재 레벨</H3BoldText>
              <InfoTooltip text="레벨이 8.41을 넘으면, 블랙홀 기간이 늘지 않아요." />
            </HStack>
            <HStack w="3rem">
              <Input
                name="currentLevel"
                type="number"
                min="0"
                max="30"
                value={currentLevel}
                onChange={handleChange}
                style={{ width: '5rem' }}
              />
            </HStack>
          </InputLayout>
          <InputLayout>
            <HStack spacing="1rem">
              <H3BoldText>현재 블랙홀</H3BoldText>
              <InfoTooltip text="현재 블랙홀 + 본 과정 시작 날짜가 670일이 넘으면, 블랙홀 기간이 늘지 않아요." />
            </HStack>
            <HStack w="3rem">
              <Input
                name="currentBlackhole"
                type="number"
                value={currentBlackhole}
                onChange={handleChange}
                style={{ width: '5rem' }}
              />
            </HStack>
          </InputLayout>
          <InputLayout>
            <HStack spacing="1rem">
              <H3BoldText>본 과정 시작한지</H3BoldText>
              <InfoTooltip text="휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요." />
            </HStack>
            <HStack w="3rem">
              <Input
                name="daysFromStart"
                type="number"
                value={daysFromStart}
                onChange={handleChange}
                style={{ width: '5rem' }}
              />
            </HStack>
          </InputLayout>
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
          {device === 'mobile' ? (
            <CalculatorInputMobile />
          ) : (
            <CalculatorInput />
          )}
        </CalculatorInputLayout>
        <Footer />
      </VStack>
    </>
  );
};

export default CalculatorPage;

const InputLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  color: ${({ theme }) => theme.colors.mono.black};
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
