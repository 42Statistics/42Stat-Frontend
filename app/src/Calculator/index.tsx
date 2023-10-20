import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { calculatorUserInfoAtom } from '@/Calculator/atoms/calculatorUserInfoAtom';
import { expTablesAtom } from '@/Calculator/atoms/expTablesAtom';
import {
  emptySubject,
  subjectListAtom,
} from '@/Calculator/atoms/subjectListAtom';
import { CalculatorBasicInfoInputGroup } from '@/Calculator/components/CalculatorBasicInfoInputGroup';
import { CalculatorInput } from '@/Calculator/components/CalculatorInput';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import { getDifferences } from '@/Calculator/utils/getDifferences';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

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
  const setCalculatorUserInfo = useSetAtom(calculatorUserInfoAtom);
  const setExpTables = useSetAtom(expTablesAtom);
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
    const expReqTable = getDifferences(expMaxTable);

    setCalculatorUserInfo({
      currentLevel: level,
      currentBlackhole:
        blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : 0,
      daysFromStart: -getTimeDiffFromNow(new Date(beginAt), 'day'),
    });
    setExpTables({ expMaxTable, expReqTable });
  }, [data, setCalculatorUserInfo, setExpTables, setSubjectList]);

  useEffect(() => {
    setSubjectList([emptySubject(0)]);
  }, [setSubjectList]);

  if (loading || error || !data) {
    return <></>;
  }

  return (
    <>
      <Seo title="블랙홀 계산기" />
      <VStack w="100%" spacing="4rem">
        <VStack w="100%" align="start" spacing="2rem">
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
