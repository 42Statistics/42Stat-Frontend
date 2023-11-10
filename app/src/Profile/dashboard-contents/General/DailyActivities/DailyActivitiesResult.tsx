import { QueryResult } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DailyActivityScore } from '@/Profile/dashboard-contents/General/DailyActivities';
import { ColorLegendList } from '@/Profile/dashboard-contents/General/DailyActivities/ColorLegendList';
import { DailyActivityTable } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTable';
import type { GetDailyActivitiesByLoginQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { Center, HStack, Spacer, Spinner, VStack } from '@shared/ui-kit';

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
      <HStack w="100%">
        <Spacer />
        <ColorLegendList color={color} />
      </HStack>
    </VStack>
  );
};

const getFromAndToByYear = (year: number | null) => {
  switch (year) {
    case null:
      return getFromAndToByRecentYear();
    default:
      return getFromAndToByYearNumber(year);
  }
};

const getFromAndToByRecentYear = () => {
  const now = new Date();
  const from = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
  const to = new Date();

  return [from, to];
};

const getFromAndToByYearNumber = (year: number) => {
  const from = new Date(year, 0, 1);
  const to = new Date(year, 11, 31);

  return [from, to];
};
