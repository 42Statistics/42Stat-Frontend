import {
  GetLeaderboardExpIncrementQuery,
  GetLeaderboardExpIncrementQueryVariables,
} from '@/__generated__/graphql';
import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { ApolloNotFoundView } from '@components/elements/ApolloNotFoundView';
import { Leaderboard } from '@components/templates/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@pages/PageSkeletons/LeaderboardTabResultSkeleton';

type LeaderboardExpIncrementTabResultProps = {
  result: QueryResult<
    GetLeaderboardExpIncrementQuery,
    GetLeaderboardExpIncrementQueryVariables
  >;
};

export const LeaderboardExpIncrementTabResult = ({
  result: { data, loading, error },
}: LeaderboardExpIncrementTabResultProps) => {
  if (loading) return <LeaderboardTabResultSkeleton />;
  if (error) return <ApolloErrorView message={error.message} />;
  if (!data) return <ApolloNotFoundView />;

  const {
    me,
    totalRanking: { nodes },
  } = data.getLeaderboardExpIncrement.byDateTemplate.data;
  const unit = 'XP';

  return <Leaderboard me={me} list={nodes} unit={unit} />;
};
