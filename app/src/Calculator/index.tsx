import { useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { useSetAtom } from 'jotai';

import { Footer } from '@core/components/Footer';

import { gql } from '@shared/__generated__';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { H1BoldText, VStack } from '@shared/ui-kit';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';

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
  calculatorPageDashboardRows,
  calculatorPageDashboardRowsDesktop,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import { getDifferences } from '@/Calculator/utils/getDifferences';

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
        <Dashboard
          contents={calculatorPageDashboardContents}
          defaultRows={calculatorPageDashboardRows}
          desktopRows={calculatorPageDashboardRowsDesktop}
        />
        <CalculatorInput />
        <Footer />
      </VStack>
    </>
  );
};

export default CalculatorPage;
