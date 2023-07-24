import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@/Leaderboard/components/LeaderboardTabResultSkeleton';
import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import {
  GetLeaderboardLevelQuery,
  GetLeaderboardLevelQueryVariables,
} from '@shared/__generated__/graphql';

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
    return <ApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardTabResultSkeleton />;
  }

  const {
    me,
    totalRanking: { nodes },
  } = data.getLeaderboardLevel.byDateTemplate.data;
  const unit = '';

  return <Leaderboard me={me} list={nodes} unit={unit} fixedNumber={2} />;
};
