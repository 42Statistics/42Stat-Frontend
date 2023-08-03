import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardTabResultSkeleton } from '@/Leaderboard/components/LeaderboardTabResultSkeleton';
import { QueryResult } from '@apollo/client';
import {
  GetLeaderboardExpIncrementQuery,
  GetLeaderboardExpIncrementQueryVariables,
} from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';

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
  } = data.getLeaderboardExpIncrement.byDateTemplate;
  const unit = 'XP';

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
