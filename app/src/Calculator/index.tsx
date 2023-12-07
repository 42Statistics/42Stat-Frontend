import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';

import { Footer } from '@core/components/Footer';

import { gql } from '@shared/__generated__';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { getDifferences } from '@/Calculator/utils/getDifferences';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import { CalculatorInput } from '@/Calculator/components/CalculatorInput';
import { CalculatorBasicInfoInputGroup } from '@/Calculator/components/CalculatorBasicInfoInputGroup';
import {
  emptySubject,
  subjectListAtom,
} from '@/Calculator/atoms/subjectListAtom';
import { expTablesAtom } from '@/Calculator/atoms/expTablesAtom';
import { calculatorUserInfoAtom } from '@/Calculator/atoms/calculatorUserInfoAtom';

export const GET_BLACKHOLE_INFO = gql(/* GraphQL */ `
  query GetBlackholeInfo {
    getMyInfo {
      level
      beginAt
      myRecentActivity {
        blackholedAt
      }
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

    const { level, beginAt, myRecentActivity } = data.getMyInfo || {};
    const { blackholedAt } = myRecentActivity || {};

    const expMaxTable = data.getExpTable.map((level) => level.exp);
    const expReqTable = getDifferences(expMaxTable);

    setCalculatorUserInfo({
      currentLevel: level ?? 0,
      currentBlackhole:
        blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : 0,
      daysFromStart: -getTimeDiffFromNow(
        beginAt ? new Date(beginAt) : new Date(),
        'day',
      ),
    });
    setExpTables({ expMaxTable, expReqTable });
  }, [data, setCalculatorUserInfo, setExpTables, setSubjectList]);

  useEffect(() => {
    setSubjectList([emptySubject(0)]);
  }, [setSubjectList]);

  if (loading) {
    return <></>;
  }
  if (error || !data) {
    return <FullPageApolloErrorView />;
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
