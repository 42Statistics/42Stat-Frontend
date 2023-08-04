import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardLevelQuery,
  GetLeaderboardLevelQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

type LeaderboardLevelPageResultProps = {
  result: QueryResult<
    GetLeaderboardLevelQuery,
    GetLeaderboardLevelQueryVariables
  >;
};

export const LeaderboardLevelPageResult = ({
  result: { data, loading, error },
}: LeaderboardLevelPageResultProps) => {
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
      totalRanking: { nodes },
    },
    start,
    end,
  } = data.getLeaderboardLevel.byDateTemplate;

  return (
    <Leaderboard
      me={me}
      list={nodes}
      fixedNumber={2}
      start={new Date(start)}
      end={new Date(end)}
    />
  );
};
