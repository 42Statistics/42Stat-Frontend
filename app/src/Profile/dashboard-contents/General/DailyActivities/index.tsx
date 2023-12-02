import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useSetAtom } from 'jotai';
import { sum } from 'lodash-es';
import { useContext, useState } from 'react';

import { BeginAtContext } from '@/Profile/contexts/BeginAtContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DailyActivitiesResult } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitiesResult';
import { DailyActivityTitleDescriptor } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTitleDescriptor';
import { YearSelect } from '@/Profile/dashboard-contents/General/DailyActivities/YearSelect';
import { calculateDailyActivityScores } from '@/Profile/dashboard-contents/General/DailyActivities/utils/calculateDailyActivityScores';
import { gql } from '@shared/__generated__';
import { HStack, VStack } from '@shared/ui-kit';
import { getYearsBetween } from '@shared/utils/getYearsBetween';
import { calculateDailyActivityScoresByCategory } from './utils/calculateDailyActivityScoresByCategory';
import { activitySumAtom } from '../atoms/activitySumAtom';
import { DailyActivityType } from '@shared/__generated__/graphql';

const GET_DAILY_ACTIVITIES_BY_LOGIN = gql(/* GraphQL */ `
  query GetDailyActivitiesByLogin($login: String!, $year: Int) {
    getPersonalGeneral(login: $login) {
      dailyActivities(year: $year) {
        date
        records {
          ... on DailyLogtimeRecord {
            type
            value
          }
          ... on DailyDefaultRecord {
            type
            id
            at
          }
        }
      }
    }
  }
`);

export const DailyActivities = () => {
  const { login } = useContext(UserProfileContext);
  const [year, setYear] = useState<number | null>(null);
  const result = useQuery(GET_DAILY_ACTIVITIES_BY_LOGIN, {
    variables: { login, year: year ?? undefined },
  });
  const { data, refetch } = result;
  const beginAt = useContext(BeginAtContext);
  const setActivitySum = useSetAtom(activitySumAtom);

  const { dailyActivities } = data?.getPersonalGeneral ?? {};
  const dailyActivityScores =
    dailyActivities !== undefined
      ? calculateDailyActivityScores(dailyActivities)
      : [];
  const total = sum(dailyActivityScores.map(({ score }) => score));
  const dailyActivityScoresTotalByCategory =
    dailyActivities !== undefined
      ? calculateDailyActivityScoresByCategory(dailyActivities)
      : { logTime: 0, event: 0, corrector: 0, corrected: 0 };
  setActivitySum(dailyActivityScoresTotalByCategory);
  const yearsFromBeginAt = getYearsBetween(beginAt, new Date()).reverse();
  const handleYearChange = (year: number | null) => {
    setYear(year);
    refetch({ login, year: year ?? undefined });
  };

  return (
    <Layout>
      <VStack h="100%">
        <HStack w="100%" align="start" justify="space-between">
          <DailyActivityTitleDescriptor year={year} total={total} />
          <YearSelect list={yearsFromBeginAt} onChange={handleYearChange} />
        </HStack>
        <DailyActivitiesResult
          year={year}
          result={result}
          dailyActivityScores={dailyActivityScores}
        />
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`;
