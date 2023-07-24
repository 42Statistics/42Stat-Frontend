import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { Leaderboard } from '@components/templates/Leaderboard';
import {
  GetLeaderboardExpIncrementQuery,
  GetLeaderboardExpIncrementQueryVariables,
} from '@shared/__generated__/graphql';
import { LeaderboardTabResultSkeleton } from '../../components/LeaderboardTabResultSkeleton';

type LeaderboardExpIncrementTabResultProps = {
  result: QueryResult<
    GetLeaderboardExpIncrementQuery,
    GetLeaderboardExpIncrementQueryVariables
  >;
};

export const LeaderboardExpIncrementTabResult = ({
  result: { data, loading, error },
}: LeaderboardExpIncrementTabResultProps) => {
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
  } = data.getLeaderboardExpIncrement.byDateTemplate.data;
  const unit = 'XP';

  return <Leaderboard me={me} list={nodes} unit={unit} />;
};
