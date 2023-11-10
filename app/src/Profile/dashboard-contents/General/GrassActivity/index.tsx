import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';

import { TotalActivity } from '@/Profile/dashboard-contents/General/GrassActivity/TotalActivity';
import { DailyActivity } from '@/Profile/dashboard-contents/General/GrassActivity/DailyActivity';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { useContext, useEffect } from 'react';

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
  // const grassData = useAtomValue(grassAtom);
  //클릭된 잔디 상태 불러오기
  const title = '활동 내역';
  const { loading, error, data, refetch } = useQuery(
    GET_PERSONAL_ACTIVITY_LOG,
    {
      variables: {
        login,
        args: [{ type: 'CORRECTOR', id: 124 }] /* 수정 필요 */ ?? undefined,
      },
    },
  );

  //불러온 상태에 따라 refetch
  // useEffect(() => {
  //   refetch(grassData);
  // }, [grassData]);

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  return (
    <Layout>
      <TotalActivity />
      <DailyActivity />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
