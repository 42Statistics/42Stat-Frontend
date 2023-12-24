import { useContext } from 'react';

import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';

import { gql } from '@shared/__generated__';
import { DailyActivityDetailRecordIdWithType } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { Loader, VStack } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

import { DailyCorrected } from './DailyCorrected';
import { DailyCorrector } from './DailyCorrector';
import { DailyEvent } from './DailyEvent';

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

type DailyActivityTimelineProps = {
  dailyRecords: DailyActivityDetailRecordIdWithType[];
};

export const DailyActivityTimeline = ({
  dailyRecords,
}: DailyActivityTimelineProps) => {
  const theme = useTheme();
  const { coalition } = useContext(UserProfileContext);
  const color = coalition?.color ?? theme.colors.mono.black;
  const { login } = useContext(UserProfileContext);

  const { loading, error, data } = useQuery(GET_DAILY_ACTIVITY_DETAIL_RECORDS, {
    variables: {
      login,
      args: dailyRecords,
    },
  });

  //todo: height 중앙값으로 수정
  if (loading) {
    return (
      <VStack w="100%" h="21rem">
        <Loader />
      </VStack>
    );
  }
  if (error) {
    return (
      <VStack w="100%" h="21rem">
        <ApolloErrorView message={'Something Went Wrong'} />
      </VStack>
    );
  }
  if (!data) {
    return (
      <VStack w="100%" h="21rem">
        <ApolloNotFoundView />
      </VStack>
    );
  }

  return (
    <>
      {data?.getPersonalGeneral.dailyActivityDetailRecords.map(
        (item, index) => {
          if ('teamId' in item) {
            if (item.type === 'CORRECTED')
              return <DailyCorrected key={index} data={item} color={color} />;
            else
              return <DailyCorrector key={index} data={item} color={color} />;
          } else {
            return <DailyEvent key={index} data={item} color={color} />;
          }
        },
      )}
    </>
  );
};
