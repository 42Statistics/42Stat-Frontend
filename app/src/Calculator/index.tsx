import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { CalculatorInput } from '@/Calculator/components/CalculatorInput';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { subjectListAtom } from './atoms/subjectListAtom';
import { CalculatorBasicInfoInputGroup } from './components/CalculatorBasicInfoInputGroup';

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
  const setCalculatorProps = useSetAtom(calculatorPropsAtom);
  const setSubjectList = useSetAtom(subjectListAtom);
  const device = useDeviceType();
  const { loading, error, data } = useQuery(GET_BLACKHOLE_INFO);

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
      <VStack w="100%" spacing="4rem">
        <VStack w="100%" align="start" spacing="1rem">
          <H1BoldText>블랙홀 계산기</H1BoldText>
          <CalculatorBasicInfoInputGroup />
        </VStack>
        <DashboardTemp
          contents={calculatorPageDashboardContents}
          rows={
            device === 'desktop'
              ? calculatorPageDashboardDesktop
              : calculatorPageDashboardTablet
          }
        />
        <CalculatorInput />
        <Footer />
      </VStack>
    </>
  );
};

export default CalculatorPage;
