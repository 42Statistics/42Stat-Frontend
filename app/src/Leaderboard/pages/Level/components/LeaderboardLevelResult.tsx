import { QueryResult } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardArgsAtom } from '@/Leaderboard/atoms/leaderboardArgsAtom';
import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardDateDescriptor } from '@/Leaderboard/components/Leaderboard/LeaderboardDateDescriptor';
import { LeaderboardPagination } from '@/Leaderboard/components/LeaderboardPagination';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { SIZE_PER_PAGE } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import {
  DateTemplate,
  GetLeaderboardLevelQuery,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { HStack, Spacer, VStack } from '@shared/ui-kit';

type LeaderboardLevelResultProps = {
  result: QueryResult<
    GetLeaderboardLevelQuery,
    {
      dateTemplate: DateTemplate;
      pageNumber: number;
      promo: number | null;
      pageSize: number;
    }
  >;
};

export function LeaderboardLevelResult({
  result: { loading, error, data },
}: LeaderboardLevelResultProps) {
  const [_, setSearchParams] = useSearchParams();
  const { PROMO, PAGE } = LEADERBOARD_PARAM_KEYS;
  const { promo, pageNumber } = useAtomValue(leaderboardArgsAtom);

  function handlePageNumberChange(pageNumber: number) {
    const params = new URLSearchParams();
    if (promo) {
      params.set(PROMO, promo.toString());
    }
    params.set(PAGE, pageNumber.toString());

    setSearchParams(params);
  }

  if (loading) {
    return <LeaderboardResultSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardResultSkeleton />;
  }

  const {
    data: {
      me,
      totalRanking: { nodes, totalCount },
    },
    start,
    end,
  } = data.getLeaderboardLevel.byDateTemplate;

  return (
    <VStack w="100%" spacing="4rem">
      <VStack w="100%" spacing="1rem">
        <HStack w="100%">
          <Spacer />
          <LeaderboardDateDescriptor
            start={new Date(start)}
            end={new Date(end)}
          />
        </HStack>
        <Leaderboard me={me} list={nodes} fixedNumber={2} />
      </VStack>
      <LeaderboardPagination
        currPageNumber={pageNumber}
        onPageNumberChange={handlePageNumberChange}
        totalPageNumber={Math.ceil(totalCount / SIZE_PER_PAGE)}
      />
    </VStack>
  );
}
