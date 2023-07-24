import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { Leaderboard } from '@components/templates/Leaderboard';
import {
  GetLeaderboardCoalitionScoreQuery,
  GetLeaderboardCoalitionScoreQueryVariables,
} from '@shared/__generated__/graphql';
import { LeaderboardTabResultSkeleton } from '../../components/LeaderboardTabResultSkeleton';

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
    return <LeaderboardTabResultSkeleton />;
  }

  const {
    me,
    totalRanking: { nodes },
  } = data.getLeaderboardScore.byDateTemplate.data;
  const unit = '';

  return <Leaderboard me={me} list={nodes} unit={unit} />;
};
