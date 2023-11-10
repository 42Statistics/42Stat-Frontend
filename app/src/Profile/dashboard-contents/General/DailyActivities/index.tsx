import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { sum } from 'lodash-es';
import { useContext, useState } from 'react';

import { BeginAtContext } from '@/Profile/contexts/BeginAtContext';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DailyActivitiesResult } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivitiesResult';
import { DailyActivityTitleDescriptor } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTitleDescriptor';
import { YearSelect } from '@/Profile/dashboard-contents/General/DailyActivities/YearSelect';
import { gql } from '@shared/__generated__';
import {
  DailyAcitivtyType,
  type DailyActivity,
  type DailyActivityRecord,
} from '@shared/__generated__/graphql';
import { MILLISECONDS } from '@shared/constants/date';
import { HStack, VStack } from '@shared/ui-kit';
import { getYearsBetween } from '@shared/utils/getYearsBetween';

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

  const { dailyActivities } = data?.getPersonalGeneral ?? {};
  const dailyActivityScores =
    dailyActivities !== undefined
      ? calculateDailyActivityScores(dailyActivities)
      : [];
  const total = sum(dailyActivityScores.map(({ score }) => score));
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

export type DailyActivityScore = {
  date: Date;
  score: number;
};

const calculateDailyActivityScores = (
  list: DailyActivity[],
): DailyActivityScore[] => {
  return list.map(({ date, records }) => ({
    date: new Date(date),
    score: calculateDailyActivityScore(records),
  }));
};

const calculateDailyActivityScore = (records: DailyActivity['records']) => {
  return sum(records.map((record) => getScoreByDailyActivityType(record)));
};

const getScoreByDailyActivityType = (record: DailyActivityRecord) => {
  if (record.__typename === 'DailyDefaultRecord') {
    switch (record.type) {
      case DailyAcitivtyType.Corrected:
        return 1;
      case DailyAcitivtyType.Corrector:
        return 1;
      case DailyAcitivtyType.Event:
        return 1;
      default:
        throw new Error(`Unexpected DailyActivityType: ${record.type}`);
    }
  }

  if (record.__typename === 'DailyLogtimeRecord') {
    switch (record.type) {
      case DailyAcitivtyType.Logtime:
        return Math.ceil(record.value / MILLISECONDS.HOUR);
      default:
        throw new Error(`Unexpected DailyActivityType: ${record.type}`);
    }
  }

  throw new Error(`Unexpected DailyActivityRecord: ${record.__typename}`);
};
