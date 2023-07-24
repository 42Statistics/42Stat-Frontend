import { QueryResult } from '@apollo/client';
import { ApolloErrorView } from '@components/elements/ApolloErrorView';
import { Leaderboard } from '@components/templates/Leaderboard';
import {
  GetLeaderboardEvalCountQuery,
  GetLeaderboardEvalCountQueryVariables,
} from '@shared/__generated__/graphql';
import { LeaderboardTabResultSkeleton } from '../../components/LeaderboardTabResultSkeleton';

type LeaderboardEvalCountTabResultProps = {
  result: QueryResult<
    GetLeaderboardEvalCountQuery,
    GetLeaderboardEvalCountQueryVariables
  >;
};

export const LeaderboardEvalCountTabResult = ({
  result: { data, loading, error },
}: LeaderboardEvalCountTabResultProps) => {
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
  } = data.getLeaderboardEvalCount.byDateTemplate.data;
  const unit = '회';

  return <Leaderboard me={me} list={nodes} unit={unit} />;
};
