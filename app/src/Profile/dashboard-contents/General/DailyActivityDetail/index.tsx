import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DailyActivityDetailContent } from '@/Profile/dashboard-contents/General/DailyActivityDetail/DailyActivityDetailContent';
import { gql } from '@shared/__generated__';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
} from '@shared/components/DashboardContentView/Error';
import { Device } from '@shared/types/Device';
import { Body1MediumText, Text, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useContext, useEffect } from 'react';
import { dailyActivityAtom } from '../atoms/dailyActivityAtom';
import { parseDailyActivity } from './utils/parseDailyActivity';

const GET_DAILY_ACTIVITY_DETAIL_RECORDS = gql(/* GraphQL */ `
  query GetDailyActivityDetailRecords(
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
          correctorLogin
          leaderLogin
          projectName
          beginAt
          filledAt
        }
      }
    }
  }
`);

export const DailyActivityDetail = () => {
  const { login } = useContext(UserProfileContext);
  const { date, records } = useAtomValue(dailyActivityAtom);
  const { dailyRecords, timeRecord } = parseDailyActivity(records);
  const device = useDeviceType();

  const title = '일별 활동 내역';

  const { loading, error, data, refetch } = useQuery(
    GET_DAILY_ACTIVITY_DETAIL_RECORDS,
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

  return (
    <Layout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack align="start" spacing="0.4rem" style={{ marginLeft: '1rem' }}>
          <Body1MediumText>{title}</Body1MediumText>
          <Text>{dayjs(date).format('YYYY년 M월 D일')}</Text>
        </VStack>
        <DetailLayout device={device}>
          <DailyActivityDetailContent time={{ date, timeRecord }} data={data} />
        </DetailLayout>
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2.4rem;
`;

const DetailLayout = styled.div<{ device: Device | null }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ device }) => (device === 'mobile' ? 'column' : 'row')};
  align-items: center;
`;
