import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@/Leaderboard/components/LeaderboardTabResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardLevelQuery,
  GetLeaderboardLevelQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

type LeaderboardLevelTabResultProps = {
  result: QueryResult<
    GetLeaderboardLevelQuery,
    GetLeaderboardLevelQueryVariables
  >;
};

export const LeaderboardLevelTabResult = ({
  result: { data, loading, error },
}: LeaderboardLevelTabResultProps) => {
  if (loading) {
    return <LeaderboardTabResultSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardTabResultSkeleton />;
  }

  const {
    me,
    totalRanking: { nodes },
  } = data.getLeaderboardLevel.byDateTemplate.data;

  return <Leaderboard me={me} list={nodes} fixedNumber={2} />;
};
