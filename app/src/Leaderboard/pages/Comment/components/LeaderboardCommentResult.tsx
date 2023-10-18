import { QueryResult } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardDateDescriptor } from '@/Leaderboard/components/Leaderboard/LeaderboardDateDescriptor';
import { LeaderboardPagination } from '@/Leaderboard/components/LeaderboardPagination';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { SIZE_PER_PAGE } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';
import {
  DateTemplate,
  Exact,
  GetLeaderboardCommentQuery,
  InputMaybe,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { HStack, Spacer, VStack } from '@shared/ui-kit';

type LeaderboardCommentResultProps = {
  result: QueryResult<
    GetLeaderboardCommentQuery,
    Exact<{
      pageSize: number;
      pageNumber: number;
      dateTemplate: DateTemplate;
      promo?: InputMaybe<number> | undefined;
    }>
  >;
};

export function LeaderboardCommentResult({
  result: { loading, error, data },
}: LeaderboardCommentResultProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { promo, dateTemplate, pageNumber } = toLeaderboardArgs(searchParams);
  const { PROMO, DATE, PAGE } = LEADERBOARD_PARAM_KEYS;

  function handlePageNumberChange(newPageNumber: number) {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, dateTemplate);
    if (promo) {
      newURLSearchParams.set(PROMO, promo.toString());
    }
    newURLSearchParams.set(PAGE, newPageNumber.toString());
    setSearchParams(newURLSearchParams);
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
  } = data.getLeaderboardComment.byDateTemplate;

  const unit = '자';

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
        <Leaderboard me={me} list={nodes} unit={unit} />
      </VStack>
      <LeaderboardPagination
        currPageNumber={pageNumber}
        onPageNumberChange={handlePageNumberChange}
        totalPageNumber={Math.ceil(totalCount / SIZE_PER_PAGE)}
      />
    </VStack>
  );
}
