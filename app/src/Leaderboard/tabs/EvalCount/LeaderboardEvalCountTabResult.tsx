import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@/Leaderboard/components/LeaderboardTabResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardEvalCountQuery,
  GetLeaderboardEvalCountQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

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
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardTabResultSkeleton />;
  }

  const {
    data: {
      me,
      totalRanking: { nodes },
    },
    start,
    end,
  } = data.getLeaderboardEvalCount.byDateTemplate;
  const unit = '회';

  return (
    <Leaderboard
      me={me}
      list={nodes}
      unit={unit}
      start={new Date(start)}
      end={new Date(end)}
    />
  );
};
