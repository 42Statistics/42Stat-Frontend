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
import { DailyActivityType } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import { HStack, VStack, Body1MediumText } from '@shared/ui-kit';

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
        args: [
          { id: 4970811, type: DailyActivityType.Corrected },
          { id: 4962990, type: DailyActivityType.Corrected },
          { id: 4970811, type: DailyActivityType.Corrector },
          { id: 15072, type: DailyActivityType.Event },
        ] /* 수정 필요 */,
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
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <HStack style={{ marginLeft: '1rem' }}>
          <Body1MediumText>{title}</Body1MediumText>
        </HStack>
        <HStack w="100%" h="100%">
          <TotalGrassActivity />
          <DailyGrassActivity />
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
