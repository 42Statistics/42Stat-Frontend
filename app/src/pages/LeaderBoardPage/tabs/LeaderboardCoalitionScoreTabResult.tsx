import {
  GetLeaderboardCoalitionScoreQuery,
  GetLeaderboardCoalitionScoreQueryVariables,
} from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { ApolloNotFoundView } from '@components/elements/ApolloNotFoundView';
import { Leaderboard } from '@components/templates/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@pages/PageSkeletons/LeaderboardTabResultSkeleton';

type LeaderboardCoalitionScoreTabResultProps = {
  result: QueryResult<
    GetLeaderboardCoalitionScoreQuery,
    GetLeaderboardCoalitionScoreQueryVariables
  >;
};

export const LeaderboardCoalitionScoreTabResult = ({
  result: { data, loading, error },
}: LeaderboardCoalitionScoreTabResultProps) => {
  if (loading) {
    return <LeaderboardTabResultSkeleton />;
  }
  if (error) {
    return <ApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <ApolloNotFoundView />;
  }

  const {
    me,
    totalRanking: { nodes },
  } = data.getLeaderboardScore.byDateTemplate.data;
  const unit = '';

  return <Leaderboard me={me} list={nodes} unit={unit} />;
};
