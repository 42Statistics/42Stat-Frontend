import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import { TotalGrassActivity } from '@/Profile/dashboard-contents/General/GrassActivity/TotalGrassActivity';
import { DailyGrassActivity } from '@/Profile/dashboard-contents/General/GrassActivity/DailyGrassActivity';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { useContext, useEffect } from 'react';
import { HStack, VStack, Body1MediumText } from '@shared/ui-kit';
import { dailyActivityAtom } from '../atoms/dailyActivityAtom';
import { useAtomValue } from 'jotai';
import { parseDailyActivity } from './utils/parseDailyActivity';

const GET_PERSONAL_ACTIVITY_LOG = gql(/* GraphQL */ `
  query GetPersonalActivityLog(
    $login: String!
    $args: [DailyActivityDetailRecordIdWithType!]!
  ) {
    getPersonalGeneral(login: $login) {
      dailyActivityDetailRecords(args: $args) {
        ... on DailyEventDetailRecord {
          name
          location
          beginAt
          endAt
        }
        ... on DailyEvaluationDetailRecord {
          type
          teamId
          leaderLogin
          projectName
          beginAt
          filledAt
        }
      }
    }
  }
`);

export const GrassActivity = () => {
  const { login } = useContext(UserProfileContext);
  const { date, records } = useAtomValue(dailyActivityAtom);
  const { dailyRecords, timeRecord } = parseDailyActivity(records);

  const title = '활동 내역';

  const { loading, error, data, refetch } = useQuery(
    GET_PERSONAL_ACTIVITY_LOG,
    {
      variables: {
        login,
        args: dailyRecords,
      },
    },
  );

  useEffect(() => {
    if (dailyRecords.length === 0) return;
    refetch({ login, args: dailyRecords });
  }, [refetch, login, dailyRecords]);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  // if (!data) {
  //   return <DashboardContentNotFound title={title} />;
  // }

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <HStack style={{ marginLeft: '1rem' }}>
          <Body1MediumText>{title}</Body1MediumText>
        </HStack>
        <HStack w="100%" h="100%">
          <TotalGrassActivity />
          <DailyGrassActivity time={{ date, timeRecord }} data={data} />
        </HStack>
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`;
