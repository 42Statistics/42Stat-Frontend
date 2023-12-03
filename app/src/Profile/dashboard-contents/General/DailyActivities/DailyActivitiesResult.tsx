import { QueryResult } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { ColorLegendList } from '@/Profile/dashboard-contents/General/DailyActivities/ColorLegendList';
import { DailyActivityTable } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTable';
import type { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities/types/DailyActivityScore';
import { getFromAndToByYear } from '@/Profile/dashboard-contents/General/DailyActivities/utils/getFromAndToByYear';
import type { GetDailyActivitiesByLoginQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { Center, Spinner, VStack } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { TotalDailyActivityDescriptor } from './TotalDailyActivityDescriptor';

type DailyActivitiesResultProps = {
  year: number | null;
  result: QueryResult<
    GetDailyActivitiesByLoginQuery,
    {
      login: string;
      year: number | undefined;
    }
  >;
  dailyActivityScores: DailyActivityScore[];
};

export const DailyActivitiesResult = ({
  year,
  result: { loading, error, data },
  dailyActivityScores,
}: DailyActivitiesResultProps) => {
  const theme = useTheme();
  const { coalition } = useContext(UserProfileContext);
  const color = coalition?.color ?? theme.colors.accent.default;
  const [from, to] = getFromAndToByYear(year);

  if (loading) {
    return (
      <Center w="100%" h="100%">
        <Spinner />
      </Center>
    );
  }
  if (error) {
    return (
      <Center w="100%" h="100%">
        <ApolloErrorView message={error.message} />
      </Center>
    );
  }
  if (!data) {
    return (
      <Center w="100%" h="100%">
        <ApolloNotFoundView />
      </Center>
    );
  }

  return (
    <VStack w="100%" h="100%" spacing="2rem">
      <DailyActivityTable
        list={dailyActivityScores}
        color={color}
        from={from}
        to={to}
      />
      <DailyActivitiesResultFooterLayout>
        <TotalDailyActivityDescriptor />
        <ColorLegendList color={color} />
      </DailyActivitiesResultFooterLayout>
    </VStack>
  );
};

const DailyActivitiesResultFooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;

  ${mq({
    flexDirection: ['column', 'column', 'row'],
    alignItems: ['flex-end', 'flex-end', 'center'],
    gap: ['2rem', '2rem', '0'],
  })}
`;
